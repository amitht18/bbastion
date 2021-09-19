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

export type PostsState = {
    posts: Post[],
    users: User[],
    isLoading: boolean,
    currentPost: Post | undefined
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
    isLoading: false,
    currentPost: undefined
}

export type DispatchType = (args: PostAction) => PostAction
