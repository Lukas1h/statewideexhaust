import { ReactNode } from "react";

export default function Card(
        {children, className}:{children:ReactNode, className?:string}
    ){
    
    return (
        <div className={`bg-gradient-to-l from-red-100 to-gray-200 rounded-2xl flex items-center flex-col py-6 p-2 md:p-8 mb-4 ${className}`}>
            {children}
        </div>
    )
}