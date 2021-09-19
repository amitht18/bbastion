import { Post } from "../post.types";

function PostDetail(post: Post) {
    return (
        <div className="media blog-media">
            <img className="d-flex img-thumbnail col-md-6" src="https://via.placeholder.com/600/8e973b" alt="Generic placeholder" />
            <div className="media-body">
                <h5 className="mt-0">{post.title}</h5>
                <p>{post.body}</p>
                <footer className="blockquote-footer">{post.userId}</footer>
            </div>
        </div>
    )
}

export default PostDetail;
