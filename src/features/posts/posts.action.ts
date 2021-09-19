import axios from 'axios'
import { RESOURCES } from '../../app/https/backend';
import { FETCH_POSTS_INIT, FETCH_POSTS_SUCCESS, FETCH_USERS_SUCCESS, SET_POST_AS_CURRENT } from './post.action.types'
import { DispatchType, Post, User } from './post.types'

// Set Number of posts to load
const POST_COUNT_TO_LOAD = 2;

//synchronous action creator
const fetchUsers = (users: User[], isLoading: boolean) => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users , isLoading}
})

const fetchPostsSuccess = (posts: Post[], isLoading: boolean) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: { posts , isLoading}
})

const fetchPostsInit = () => ({
    type: FETCH_POSTS_INIT,
    payload: { posts: [] , isLoading: false}
})

export const setPostAsCurrentPost = (post: Post) => ({
    type: SET_POST_AS_CURRENT,
    payload: {currentPost: post}
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchPosts =  () => {
    return async (dispatch: DispatchType) => {
        try {
            let users = await axios.get(RESOURCES.USERS);
            dispatch(fetchUsers(users.data.slice(0,5), true))
            users.data.slice(0,5).map(async (user: any) => {
                let posts = await axios.get(RESOURCES.POSTS(user.id))
                dispatch(fetchPostsInit())
                dispatch(fetchPostsSuccess(posts.data.splice(0, POST_COUNT_TO_LOAD), false))
            })
        }
        catch(e){
            console.log(e)
        }
    }
}
