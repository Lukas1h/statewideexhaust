import { Suspense } from "react";
import { fetchAllPosts } from "../lib/sanity";
import { Post } from "../types/post";
import Link from "next/link";

export const metadata = {
    title: "Blog"
}

export default async function Blog(){
    
    return (
        <Suspense>
            <ListBlogPosts/>
        </Suspense>
    )
}

async function ListBlogPosts(){
    const posts = await fetchAllPosts()
    return (
        <>
            {posts.map((post)=>{
                return <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>{post.title}</Link>
            })}
        </> 
    )
}