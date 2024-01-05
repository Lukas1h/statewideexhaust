
import { Post } from "@/app/types/post";
import {PortableText} from '@portabletext/react'
import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import {client} from "@/app/lib/sanity"
import "./styles.css"


const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default async function BlogPost({post}:{post:Post}){
    console.log(post.coverImage.metadata)

    const image = post.coverImage
    

    return (
        <div>
            <Image
                src={image.url}
                height={image.metadata.dimensions.height}
                width={image.metadata.dimensions.width}
                alt="image"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1000, 1000))}`}
                className="rounded-md"
            />
            <div className="body-text">
                <PortableText value={post.content}></PortableText>
            </div>
        </div>
    )
}