"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'


const options: EmblaOptionsType = { loop: true }
const slideImages = ["/slideshow/Frame 1.svg", "/slideshow/Frame 2.svg", "/slideshow/Frame 3.svg"]


const Carousel = () => {
    const [emblaRef] = useEmblaCarousel(options)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slideImages.map((image) => (
                        <div className="embla__slide " key={image}>
                            <div className="embla__slide__number">
                                <img src={image} alt="" className='rounded-sm embla__image' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel
