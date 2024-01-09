import {Hero,TrustedBy,Images,WhyChooseUs,ContactUs} from "@/app/ui/components"
import {Popup} from "@/app/ui/components"


export default async function Home() {


  return (
     // Due to the fact that `box-shadow` doesnt work with clip-path, we must have an extra parent div for a workaround
     <>
      <div className="home-background-container">
        <div className="home-background">
          <Hero/>
          <TrustedBy/>
          <Images></Images>
          <WhyChooseUs></WhyChooseUs>
          {/* <ContactUs></ContactUs> */}
          <div className="h-[100px]"></div>
        </div>
      </div>
      </>
  )
}
