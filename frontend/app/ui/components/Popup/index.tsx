'use client';
import { useSearchParams } from 'next/navigation'
import {useRouter,usePathname} from "next/navigation"


//contact-successful
export default function Popup(
        {
            message,
            paramName
        }:{
            message:{
                header:string,
                body:string
            },
            paramName:string
        }
    ){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const param = searchParams.get(paramName)


    function closePopup(){
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.set(paramName,"false")
        router.push(pathname + '?' + newParams.toString()) //TODO: change to replace
    }
    
    return (
        <div
         
         className={`fixed inset-0 flex items-center justify-center z-50 ${param != "true" ? "hidden" : ""}`}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 max-w-md mx-auto rounded-lg z-10">
            <p className="text-lg font-semibold mb-4">{message.header}</p>
            <p className="text-gray-700">{message.body}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue" onClick={closePopup}>Close</button>
            </div>
        </div>
    )
}