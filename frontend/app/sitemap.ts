import { MetadataRoute } from 'next'


const baseUrl = 'https://statewideexhaustservices.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


    return [
        {
            url: baseUrl + "/",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: baseUrl + "/contact-us",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}