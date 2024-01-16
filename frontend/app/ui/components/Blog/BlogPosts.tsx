import { Suspense } from "react";
import { fetchAllPosts } from "@/app/lib/sanity";
import Image from "next/image";
import { Post } from "@/app/types/post";
import Link from "next/link";
import { Card } from "..";

export default async function BlogPosts(){
    const posts = await fetchAllPosts()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            {posts.map((post)=>{
              return (
                <a className=" rounded-xl overflow-hidden shadow-md m-1 " href={`/blog/${post.slug.current}`} key={post.slug.current}>
                  <Image
                      src={post.coverImage.url}
                      height={post.coverImage.metadata.dimensions.height}
                      width={post.coverImage.metadata.dimensions.width}
                      alt="image"
                  />
                  <div className="p-2 bg-gray-50 border-t-2">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </a>
              )
            })}
        </div> 
    )
}