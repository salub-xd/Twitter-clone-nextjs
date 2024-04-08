export interface User {
    id: string;
    name: string ;
    username: string ;
    bio?: string ;
    email?: string ;
    emailVerified?: string ;
    image?: string ;
    coverImage?: string ;
    createdAt: Date ;
    password?: string ;
    followingIds?: string[] ;
    followersIds?: string[] ;
}

export interface Post {
    id: string;
    title: string;
    image?: string;
    userId: string;
    createdAt: string;
    likedIds?: string[];
}

export interface Comment {
    id: string;
    title: string;
    userId: string;
    postId: string;
    createdAt: string;
}