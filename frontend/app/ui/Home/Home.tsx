import Hero from "@/app/ui/Home/Hero"
import TrustedBy from "@/app/ui/Home/TrustedBy"
import "./styles.css"

export default async function Home() {


  return (
     // Due to the fact that `box-shadow` doesnt work with clip-path, we must have an extra parent div for a workaround
      <div className="home-background-container">
        <div className="home-background">
          <Hero/>
          <TrustedBy/>
          <div className="h-[500px]"></div>
        </div>
      </div>
      
  )
}