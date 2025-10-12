import React from 'react'

interface TitleProps {
    part1: string;
    part2?: string;
    linePosition?: 'right' | 'down';
    className?: string
}

export default function Title({ part1, part2, linePosition = 'right', className }: TitleProps) {

    return (
        <h1 className={`text-3xl font-medium relative w-fit ${className}`}>
            <span className='font-bold text-primary'>{part1}</span>
            <span>{part2}</span>
            {
                linePosition === 'right' &&
                <div className='absolute left-full translate-x-3 top-1/2 w-14 h-1 bg-gradient-to-r from-primary to-secondary'></div>
            }
            {
                linePosition === 'down' &&
                <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-gradient-to-r from-primary to-secondary'></div>
            }
        </h1>
    )
}
