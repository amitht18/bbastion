import { RootState } from "../../app/store";
import { Post, User, Comment } from "./post.types";

const selectAppState = (state: RootState) => state.state;

export const selectIsLoading = (state: RootState): boolean => selectAppState(state).isLoading;
export const selectPosts = (state: RootState): Post[] => selectAppState(state).posts;
export const selectCurrentPost = (state: RootState): Post | undefined => selectAppState(state).currentPost;
export const selectUsers = (state: RootState): User[] | undefined => selectAppState(state).users;
export const selectComments = (state: RootState): Comment[] => selectAppState(state).comments;