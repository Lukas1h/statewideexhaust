
import Image from "next/image"


export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white-500 rounded-xl bg-slate-50 shadow-md flex flex-col items-center">
        <Image
          src="/logo-w-text.png"
          width="2174"
          height="722"
          className=""
          alt="Hero Image"
        />
        <h1 className="text-3xl font-bold text-red-400">Where Unparalleled Quality Meets Spectaculaly Service</h1>
      </div>
    </main>
  )
}
