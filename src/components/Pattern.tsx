import Image from 'next/image'
import React from 'react'

export default function Pattern({ className, type }: { className: string, type?: string }) {
    return (
        <Image src={type === 'light' ? '/pattern-light.svg' : '/pattern.svg'} width={180} height={180} alt='Pattern'
            className={`absolute pointer-events-none ${className}`} />
    )
}
