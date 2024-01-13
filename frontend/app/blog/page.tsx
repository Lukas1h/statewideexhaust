import { Suspense } from "react";
import { fetchAllPosts } from "../lib/sanity";
import { Post } from "../types/post";
import Link from "next/link";
import { BlogPosts } from "../ui/components";

export const metadata = {
    title: "Blog"
}

export default async function Blog(){
    
    return (
        <>
        
            <h2 className="text-2xl md:text-3xl font-bold text-grey-500 text-center mb-4 ">Recent Posts</h2>
            <Suspense>
                <BlogPosts/>
            </Suspense>

        </>
    )
}

