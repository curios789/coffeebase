import styled from "styled-components";
import { Row, Col } from '../../components/grid'
import { faCommentDots, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile_place from '../../assets/profile_place.png';
import { width } from "@mui/system";
const StyledComment = styled.div`
    margin: 1em;
    display: 'flex';
    border-radius: 20px 0 20px 0;
    background-color: #ccc;
`
const CommentHeader = styled(Row)`
    align-items: center;
    padding: 0 1em;
    border-bottom: 1px dotted black;
    h4 {
        text-align: left;
    }
    .rating {
        flex: 1;
    }
`
const CommentText = styled(Col)`
min-height: 10rem;
background-color: #ccc;
margin: 1rem;
padding: 1rem;
text-align: left;
`
const CommentCard = ({ comment }) => {
    function ratingFunction(rating) {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />);
        }
        return stars;
    }
    return (
        <Row>
            <Col md='1'>
                <img src={profile_place} style={{ maxWidth: "100%" }} />
            </Col>
            <Col md='11'>
                <StyledComment>
                    <CommentHeader>
                        <Col md='8'><h4>Posted by {comment.author} at {comment.datetime}</h4></Col>
                        <Col md='4' className='rating'>
                            {ratingFunction(comment.rating)}
                        </Col>
                    </CommentHeader>
                    <Row>
                        <CommentText>{comment.text}</CommentText>
                    </Row>
                </StyledComment>
            </Col>
        </Row>
    );
}
export default CommentCard;