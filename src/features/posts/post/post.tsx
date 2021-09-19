import { Button, Card } from "react-bootstrap";
import { store } from "../../../app/store";
import { Post, User } from "../post.types";
import { setPostAsCurrentPost } from "../posts.action";

interface Props {
    post: Post,
    user: User
}

function PostComponent(props: Props) {
    function clickHandler() {
        store.dispatch(setPostAsCurrentPost(props.post))
    }

    return (
        <Card className="post" key={props.post.id}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>
                    {props.post.title}
                </Card.Title>
                <Card.Text>
                    {props.post.body}
                </Card.Text>
                <div className="text-muted post__footer">
                    <span className="blockquote-footer">{props.user.username}</span>
                    <Button size="sm" variant="primary" onClick={clickHandler} >View more</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PostComponent;
