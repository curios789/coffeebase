import { Row, Col } from '../../components/grid';
import CommentCard from "./CommentCard";


export const CommentList = ({ comments }) => {
    return (
        comments.map(comment => {
            return (
                <>
                    <Row>
                        <Col>
                            <CommentCard key={comment.id} comment={comment} />
                        </Col>
                    </Row>
                </>
            );
        }));
}