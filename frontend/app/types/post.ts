export interface Post {
    title:string,
    content:any[],
    excerpt:string
    slug:{
        current:string
    },
    publishedAt: string,
    author:{
        _ref:string
    },
    coverImage:any
}