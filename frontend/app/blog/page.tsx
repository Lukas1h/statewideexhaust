import { fetchAllPosts } from "../lib/sanity";
import { Post } from "../types/post";
import Link from "next/link";

export default async function Blog(){
    const posts = await fetchAllPosts()
    //Add comment
    return (
        <>
            {posts.map((post)=>{
                return <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>{post.title}</Link>
            })}
        </> 
    )
}