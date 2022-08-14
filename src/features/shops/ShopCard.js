import styled from "styled-components";
import { Row, Col } from '../../components/grid'
import { Card } from "../../styled-components/Card";
import { Link } from "react-router-dom";
import { faCommentDots, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectCommentsByShopId } from '../comments/commentSlice';
const ShopCardItem = styled(Card)`
    padding: 10px;
    h4 {
        margin-bottom: 0;
    }
    button {
        background: limegreen;
        padding: 10px;
        font-family: "Alegreya Sans SC";
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 3px;
        transition: background .4s;
        :hover {
            background: green;
        }
    }
    span {
        padding: 10px;
        border-radius: 3px;
        font-family: "Nunito Sans";
        color: white;
        &.open {
            background-color: limegreen;
        }
        &.closed {
            background-color: darkred;
        }
    }
`
function ratingFunction(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />);
    }
    return stars;
}
const ShopCard = ({ shop }) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    const open = time > shop.open && time < shop.close ? true : false;
    const comments = useSelector(selectCommentsByShopId(shop.id));
    return (
        <ShopCardItem>
            <Row>
                <Col><h4>{shop.name}</h4></Col>
            </Row>
            <Row>
                <Col><h5>{shop.address}</h5></Col>
            </Row>
            <Row className="description">
                <Col><p>{shop.description}</p></Col>
            </Row>
            <Row className='toolbar'>
                <Col md='3'>{open ? <span className='open'>OPEN</span> : <span className='closed'>CLOSED</span>}</Col>
                <Col md='3'><FontAwesomeIcon icon={faCommentDots} style={{ marginRight: 10 }} /> {comments.length}</Col>
                <Col md='3'>{ratingFunction(shop.rating)}</Col>
                <Col md='3'><Link to={`${shop.id}`}><button>View Shop</button></Link></Col>
            </Row>
        </ShopCardItem>
    )
}
export default ShopCard;