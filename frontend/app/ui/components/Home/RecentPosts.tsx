import { BlogPosts, Card } from "..";
import { Suspense } from "react";
export default function RecentPosts(){
    return (
        <>
        <h1 className="text-3xl md:text-5xl font-bold text-grey-500 text-center mt-8 mb-2 items-left">Recent Posts</h1>
        <Card>
            <Suspense>
                <BlogPosts/>
            </Suspense>
        </Card>
        </>
    )
}