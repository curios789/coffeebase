import { Link } from "react-router-dom";
import { Row, Col } from "../../components/grid";
import { CoffeeDetailCard, CoffeeAttribute, CoffeeCardFooter } from "../../components/coffeeCardStyle";
import { faCommentDots, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { selectCommentsByCoffeeId } from "../comments/commentSlice";

function ratingFunction(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />);
    }
    return stars;
}

const CoffeeCard = ({ coffee: { id, name, description, region, acidity, body, flavor, rating } }) => {
    const comments = useSelector(selectCommentsByCoffeeId(id));
    return (
        <CoffeeDetailCard key={id}>
            <Row className="header">
                <Col>
                    <h2>{name}</h2>
                </Col>
            </Row>
            <Row className="content">
                <Col md="6">
                    <h3>Coffee Attributes</h3>
                    <ul>
                        <CoffeeAttribute region={region.replaceAll(' ', '-').toLowerCase()}>Region: {region}</CoffeeAttribute>
                        <CoffeeAttribute> Body: {body}</CoffeeAttribute>
                        <CoffeeAttribute>Acidity: {acidity}</CoffeeAttribute>
                    </ul>
                </Col>
                <Col md="6">
                    <h3>Flavor Notes:</h3>
                    <ul>
                        {flavor.map((flavor) => { return (<CoffeeAttribute>{flavor}</CoffeeAttribute>) })}
                    </ul>
                </Col>
            </Row>
            <Row>
                <p>{description}</p>
            </Row>
            <CoffeeCardFooter>
                <Col md='4'>{ratingFunction(rating)}</Col>
                <Col md='4'><FontAwesomeIcon icon={faCommentDots} style={{ marginRight: 10 }} /> {comments.length}</Col>
                <Col md='4'><Link to={`../CoffeeDetail/${id}`}><button>View Coffee</button></Link></Col>
            </CoffeeCardFooter>
        </CoffeeDetailCard>
    )
};

export default CoffeeCard;