import { fetchPostBySlug,fetchPostTitleBySlug } from "@/app/lib/sanity"
import { notFound } from "next/navigation"
import {PortableText} from '@portabletext/react'
import Image from "next/image";
import { Metadata } from "next";
import "./styles.css"


//TODO: Move this to a folder in the UI folder or the util folder
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

export async function generateMetadata({params}:{params:{slug:string}}): Promise<Metadata> {
  // read route params
  const postSlug = params.slug
  const postTitle = await fetchPostTitleBySlug(postSlug)
  console.log("Got title",postTitle)
  
  return {
    title: postTitle,
  }
}



export default async function Page({params}:{params:{slug:string}}) {
    const postSlug = params.slug
    const post = await fetchPostBySlug(postSlug)

    if(!post) notFound()
    
    const image = post.coverImage
    

    return (
        <div className="bg-gray-50rounded-md">
            <Image
                src={image.url}
                height={image.metadata.dimensions.height}
                width={image.metadata.dimensions.width}
                alt="image"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1000, 1000))}`}
                className="rounded-md"
            />
            <div className="text-center mx-4 mt-8 mb-4">
              <h1 className="text-4xl font-medium">{post.title}</h1>
              <h2 className="text font-medium">By {post.author.name} · {new Date(post.publishedAt).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})}</h2>
            </div>
            <div className="body-text">
                <PortableText value={post.content}></PortableText>
            </div>
        </div>
    )
}