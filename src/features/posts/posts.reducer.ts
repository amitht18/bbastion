import { AnyAction } from "redux"
import { FETCH_POSTS_INIT, FETCH_POSTS_SUCCESS, FETCH_USERS_SUCCESS, SET_POST_AS_CURRENT } from "./post.action.types"
import { initialPostsState, PostsState } from "./post.types"

const postsReducer = (state: PostsState = initialPostsState , action: AnyAction): PostsState => {

    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state,
                posts: [...state.posts , ...action.payload.posts],
                isLoading: action.payload.isLoading,
                currentPost: action.payload.posts[0]
            }
        case FETCH_USERS_SUCCESS:
            return {...state,
                users: [...state.users, ...action.payload.users],
                isLoading: action.payload.isLoading
            }
        case FETCH_POSTS_INIT: 
            return {
                ...state,
                isLoading: true
            }
        case SET_POST_AS_CURRENT:
            return {
                ...state,
                currentPost: action.payload.currentPost
            }
        default:
            return state
    }
}

export default postsReducer