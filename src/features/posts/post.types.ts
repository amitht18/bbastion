export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
}

export interface Comment {
    postId: number;
    id: number;
    body: string;
}

export type PostsState = {
    posts: Post[],
    users: User[],
    isLoading: boolean,
    currentPost: Post | undefined,
    comments: Comment[]
}

export type PostAction = {
    type: string
    payload?: { 
        posts?: Post[],
        isLoading?: boolean,
        currentPost?: Post
    }
}

export const initialPostsState: PostsState = {
    posts: [],
    users: [],
    comments: [],
    isLoading: false,
    currentPost: undefined
}

export type DispatchType = (args: PostAction) => PostAction
