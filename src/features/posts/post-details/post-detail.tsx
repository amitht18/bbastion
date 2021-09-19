import { ListGroup, Card } from "react-bootstrap";
import { Post, Comment } from "../post.types";

interface Props {
    post: Post;
    comment: Comment
}

function PostDetail(props: Props) {
    return (
        <Card>
            <Card.Header>
                <h5 className="mt-0">{props.post.title}</h5>
            </Card.Header>
            <Card.Body>
                <div>Description</div>
                <Card.Text><p>{props.post.body}</p></Card.Text>
                <hr />
                <div>Comments</div>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="figure-caption font-italic">{props.comment.body}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default PostDetail;
