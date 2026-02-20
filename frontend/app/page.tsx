import { Hero, TrustedBy, Images, WhyChooseUs, ContactUs, Services } from "@/app/ui/components"
import EmblaCarousel from "./ui/components/Home/Carousel"


export default async function Home() {


  return (
    <>
      <div className="home-background flex flex-col items-center">
        <Hero />
        <EmblaCarousel />
        <WhyChooseUs></WhyChooseUs>
        <TrustedBy />
        <Images></Images>
        <Services></Services>
        <ContactUs></ContactUs>

      </div>
    </>
  )
}
