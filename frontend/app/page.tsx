import Hero from "@/app/ui/Hero"
import TrustedBy from "@/app/ui/TrustedBy"

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-4xl m-2">
        <Hero/>
        <TrustedBy/>
      </div>
    </main>
  )
}
