import {createClient} from '@sanity/client'
import { Post } from '../types/post';


export const client = createClient({
  projectId: 'yuexptbt',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

export async function fetchAllPosts(): Promise<Post[]> {
    return await client.fetch('*[_type == "post"]')
}

export async function fetchPostBySlug(slug:string): Promise<Post> {
    const posts = await client.fetch<Post[]>('*[_type == "post" && slug.current == $slug]', { slug })
    return posts[0]
}