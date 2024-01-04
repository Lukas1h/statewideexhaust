export interface Post {
    title:string,
    content:any[],
    slug:{
        current:string
    },
    publishedAt: string,
    author:{
        _ref:string
    },
    coverImage:{
        asset:any
    }
}