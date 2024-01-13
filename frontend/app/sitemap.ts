import { MetadataRoute } from 'next'
import { fetchAllPosts } from './lib/sanity'
 
const baseUrl = 'https://statewideexhaustservices.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    let postUrls = (await fetchAllPosts()).map((post):MetadataRoute.Sitemap=>{
        return {
            // @ts-ignore because I'm done screwing around with typescript
            url: baseUrl + "/blog/" + post.slug.current,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'weekly',
            priority: 0.6,
        } 
    })

    return [
        {
        url: baseUrl + "/",
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        },
        {
        url:  baseUrl + "/contact-us",
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
        },
        {
        url: baseUrl + "/blog",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
        },
        // @ts-ignore
        ...postUrls
    ]
}