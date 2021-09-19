import { useAppSelector } from "../../app/hooks";
import Header from "./header/header.component";
import PostComponent from "./post/post";
import { Post, User, Comment } from "./post.types";
import { selectPosts, selectCurrentPost, selectUsers, selectComments } from "./posts.selector";
import PostDetail from "./post-details/post-detail";
import './post.scss'
import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function PostsList() {
    const posts: Post[] = useAppSelector(selectPosts)
    const users: User[] | undefined = useAppSelector(selectUsers);
    const comments: Comment[] = useAppSelector(selectComments)
    const [postsInList, updatePostsInList] = useState(posts);
    const currentPost: Post | undefined = useAppSelector(selectCurrentPost)
    const [currentComment, updateCurrentComment] = useState<Comment>();

    useEffect(() => {
        updatePostsInList(posts);
    }, [posts])
    useEffect(() => {
        let comment = comments?.find((cmt) => cmt.postId === currentPost?.id);
        if (comment) {
            updateCurrentComment(comment);
        }
    }, [comments, currentPost])

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const filteredList = posts.filter((post) => {
            let user = users?.find((user) => user.id === post.userId);
            if (user && user.username.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                return post;
            } else {
                return undefined;
            }
        })
        if (filteredList) {
            updatePostsInList(filteredList);
        }
    }
    return (
        <div className="main container-fluid">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="main-left col-lg-3">
                    <Form className="filter">
                        <Form.Group className="mb-3">
                            <Form.Label>Filter by Username</Form.Label>
                            <input type="email" placeholder="Type username" onChange={(e) => { handleSearch(e) }} />
                        </Form.Group>
                    </Form>
                    {
                        postsInList.map((item) => {
                            let user = users?.find((user) => user.id === item.userId)
                            if (user) {
                                return <PostComponent post={item} user={user} />
                            } else {
                                return <> </>;
                            }
                        })
                    }
                </div>
                <div className="main-right col-lg-9">
                    {currentPost && currentComment && <PostDetail post={currentPost} comment={currentComment} />}
                </div>
            </div>
        </div>
    )
}

export default PostsList;