import {createClient} from '@sanity/client'
import { Post } from '../types/post';


export const client = createClient({
  projectId: 'yuexptbt',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

export async function fetchAllPosts(): Promise<Post[]> {
    const posts =  await await client.fetch<Post[]>(`
    *[_type == "post"]{
      ...,
      author->{...},
      "coverImage": coverImage.asset->{
        // include specific asset properties you need
        url,
        metadata {
          // include additional properties if needed
          dimensions,
          palette
        }
      },
    }
  `);

  console.log("Posts",posts)

  return posts
}

export async function fetchPostBySlug(slug:string): Promise<Post> {
    const posts = await client.fetch<Post[]>(`
      *[_type == "post" && slug.current == $slug]{
        ...,
        author->{...},
        "coverImage": coverImage.asset->{
          // include specific asset properties you need
          url,
          metadata {
            // include additional properties if needed
            dimensions,
            palette
          }
        },
      }
    `, { slug })
    return posts[0]
}

export async function fetchPostTitleBySlug(slug:string): Promise<string> {
  const posts = await client.fetch<Post[]>(`
    *[_type == "post" && slug.current == $slug]{
      title
    }
  `, { slug })
  return posts[0].title
}