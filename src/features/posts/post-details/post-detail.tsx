import { ListGroup, Card } from "react-bootstrap";
import { Post, Comment } from "../post.types";

interface Props {
    post: Post;
    comment: Comment
}

function PostDetail(props: Props) {
    return (
        <Card>
            <Card.Header className="font-bold"><strong>{props.post.title}</strong>
            </Card.Header>
            <Card.Body>
                <div><u>Description</u></div>
                <Card.Text>{props.post.body}</Card.Text>
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
