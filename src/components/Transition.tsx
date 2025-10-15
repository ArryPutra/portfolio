"use client";
import { motion, MotionProps } from 'framer-motion'

interface TransitionProps extends MotionProps {
    children: React.ReactNode;
    type?: string;
    duration?: number;
    delay?: number;
    className?: string;
    isAnimate?: boolean;
}

export default function Transition({
    children,
    type = "fadeUp",
    duration = 0.75,
    delay = 0,
    initial = "fadeUp",
    className = "flex items-center",
    isAnimate = false,
    ...props
}: TransitionProps) {

    if (type === "fadeUp") {
        initial = { y: 20, opacity: 0 };
    } else if (type === "fade") {
        initial = { opacity: 0 };
    }

    const animateProps = isAnimate
        ? { animate: { y: 0, opacity: 1 } }
        : { whileInView: { y: 0, opacity: 1 } };

    return (
        <motion.div
            className={className}
            initial={initial}
            transition={{ ease: "easeOut", duration: duration, delay: delay }}
            viewport={{ once: true, amount: 0.1 }}
            {...animateProps}
            {...props}>
            {children}
        </motion.div >
    )
}
