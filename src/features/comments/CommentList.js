import styled from "styled-components";
import { selectCommentsByCoffeeId } from "./commentSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from '../../components/grid';
import CommentCard from "./CommentCard";


export const CoffeeCommentList = () => {
    const { coffeeId } = useParams();
    const comments = useSelector(selectCommentsByCoffeeId(coffeeId));
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

export const ShopCommentList = ({ shop_id }) => {
    return (
        <>
            test
        </>
    )
}