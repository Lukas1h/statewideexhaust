export interface Post {
    title:string,
    content:any[],
    excerpt:string
    slug:{
        current:string
    },
    publishedAt: string,
    author:{
        name:string,
        badge:string
    },
    coverImage:any
}