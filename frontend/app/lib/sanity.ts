import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: 'yuexptbt',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

export async function fetchPosts() {
    return await client.fetch('*[_type == "post"]')
}