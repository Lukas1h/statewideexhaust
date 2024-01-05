import { fetchPostBySlug } from "@/app/lib/sanity"
import { notFound } from "next/navigation"
import {PortableText} from '@portabletext/react'
import { BlogPost } from "@/app/ui/Blog"


export default async function Page({params}:{params:{slug:string}}) {
    const postSlug = params.slug
    const post = await fetchPostBySlug(postSlug)

    if(!post) notFound()
    
    return (
        <BlogPost post={post}/>
    )
}