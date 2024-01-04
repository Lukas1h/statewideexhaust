import { fetchPostBySlug } from "@/app/lib/sanity"
import { notFound } from "next/navigation"
 
export default async function Page({params}:{params:{slug:string}}) {
    const postSlug = params.slug
    const post = await fetchPostBySlug(postSlug)

    if(!post) notFound()
    
    return (
        <p>Post: {String(post.content)}</p>
    )
}