import { ReactNode } from "react";

export default function Card(
        {children}:{children:ReactNode}
    ){
    
    return (
        <div className="bg-gradient-to-l from-red-100 to-gray-200 rounded-2xl mt-10 flex items-center flex-col py-6 p-2 md:p-8">
            {children}
        </div>
    )
}