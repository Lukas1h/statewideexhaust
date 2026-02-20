import { ReactNode } from "react";

export default function Card(
    { children, className }: { children: ReactNode, className?: string }
) {

    return (
        <div className={` bg-gray-200 rounded-2xl py-6 p-2 md:p-8 mb-20 max-w-4xl mx-auto ${className}`}>
            {children}
        </div>
    )
}