"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], input, textarea, select, label, .cursor-pointer';

export default function CustomCursor() {
    const dotWrapperRef = useRef<HTMLDivElement>(null);
    const dotInnerRef = useRef<HTMLDivElement>(null);
    const ringWrapperRef = useRef<HTMLDivElement>(null);
    const ringInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dotWrapper = dotWrapperRef.current;
        const dotInner = dotInnerRef.current;
        const ringWrapper = ringWrapperRef.current;
        const ringInner = ringInnerRef.current;
        if (!dotWrapper || !dotInner || !ringWrapper || !ringInner) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let vx = 0;
        let vy = 0;

        let isVisible = false;
        let isHovered = false;
        let isPressed = false;
        let hoveredEl: Element | null = null;
        let lastTime = performance.now();
        let rafId: number;

        const applyStateStyles = () => {
            if (!isVisible) {
                dotInner.style.opacity = "0";
                ringInner.style.opacity = "0";
                return;
            }

            const dotScale = isPressed ? 0.65 : isHovered ? 0.6 : 1;
            const ringScale = isPressed ? 0.75 : isHovered ? 1.55 : 1;

            dotInner.style.opacity = "1";
            dotInner.style.scale = `${dotScale}`;

            ringInner.style.opacity = isHovered ? "0.95" : "0.75";
            ringInner.style.scale = `${ringScale}`;
            ringInner.style.backgroundColor = isHovered
                ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                : "transparent";
            ringInner.style.borderColor = isHovered
                ? "color-mix(in srgb, var(--color-primary) 90%, transparent)"
                : "color-mix(in srgb, var(--color-primary) 55%, transparent)";
        };

        const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
            mouseX = clientX;
            mouseY = clientY;

            // 1. Inner Dot: instant 1:1 tracking on pointer event
            dotWrapper.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            if (!isVisible) {
                isVisible = true;
                ringX = mouseX;
                ringY = mouseY;
                vx = 0;
                vy = 0;
                ringWrapper.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            const el = target instanceof Element ? target.closest(INTERACTIVE_SELECTOR) : null;
            hoveredEl = el;
            isHovered = Boolean(el);

            applyStateStyles();
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType === "touch") {
                isVisible = false;
                applyStateStyles();
                return;
            }
            updatePosition(e.clientX, e.clientY, e.target);
        };

        const handleMouseMove = (e: MouseEvent) => {
            updatePosition(e.clientX, e.clientY, e.target);
        };

        const handlePointerDown = (e: PointerEvent) => {
            if (e.pointerType === "touch") return;
            isPressed = true;
            updatePosition(e.clientX, e.clientY, e.target);
        };

        const handlePointerUp = () => {
            isPressed = false;
            applyStateStyles();
        };

        const handleMouseLeave = () => {
            isVisible = false;
            isPressed = false;
            hoveredEl = null;
            isHovered = false;
            applyStateStyles();
        };

        const animate = (now: number) => {
            const dt = Math.min((now - lastTime) / 1000, 0.05);
            lastTime = now;

            let targetX = mouseX;
            let targetY = mouseY;

            // 3. Magnetic Hover: subtle pull toward interactive element center
            if (isHovered && hoveredEl && hoveredEl.isConnected) {
                const rect = hoveredEl.getBoundingClientRect();
                if (rect.width > 0 && rect.width < 280 && rect.height > 0 && rect.height < 120) {
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    targetX = mouseX + (centerX - mouseX) * 0.22;
                    targetY = mouseY + (centerY - mouseY) * 0.22;
                }
            }

            // 5. Smooth Animation: damped spring physics for natural non-mechanical trailing
            const stiffness = 280;
            const damping = 28;
            const ax = (targetX - ringX) * stiffness - vx * damping;
            const ay = (targetY - ringY) * stiffness - vy * damping;

            vx += ax * dt;
            vy += ay * dt;
            ringX += vx * dt;
            ringY += vy * dt;

            ringWrapper.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("pointerdown", handlePointerDown, { passive: true });
        window.addEventListener("pointerup", handlePointerUp, { passive: true });
        window.addEventListener("pointercancel", handlePointerUp, { passive: true });
        window.addEventListener("blur", handlePointerUp);
        window.addEventListener("dragend", handlePointerUp);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("pointercancel", handlePointerUp);
            window.removeEventListener("blur", handlePointerUp);
            window.removeEventListener("dragend", handlePointerUp);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
        >
            {/* 2. Outer Ring Wrapper (Position only) */}
            <div
                ref={ringWrapperRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    willChange: "transform",
                }}
            >
                <div
                    ref={ringInnerRef}
                    className="cursor-spring-scale"
                    style={{
                        width: "34px",
                        height: "34px",
                        marginLeft: "-17px",
                        marginTop: "-17px",
                        borderRadius: "9999px",
                        border: "1.25px solid color-mix(in srgb, var(--color-primary) 55%, transparent)",
                        backgroundColor: "transparent",
                        opacity: 0,
                        scale: "1",
                        pointerEvents: "none",
                        willChange: "scale, opacity",
                    }}
                />
            </div>

            {/* 1. Inner Dot Wrapper (Position only) */}
            <div
                ref={dotWrapperRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    willChange: "transform",
                }}
            >
                <div
                    ref={dotInnerRef}
                    className="cursor-spring-scale"
                    style={{
                        width: "7px",
                        height: "7px",
                        marginLeft: "-3.5px",
                        marginTop: "-3.5px",
                        borderRadius: "9999px",
                        backgroundColor: "var(--color-primary)",
                        opacity: 0,
                        scale: "1",
                        pointerEvents: "none",
                        willChange: "scale, opacity",
                    }}
                />
            </div>
        </div>
    );
}
