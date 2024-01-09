import Link from "next/link"

export default function notFound(){
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold text-grey-500 text-center mt-8 mb-2 items-left">Page Not Found</h1>
            <p>Maybe try going <Link href={"/"} className="underline font-semibold">home</Link>.</p>
        </div>
    )
}