import { Link } from "react-router-dom";
import { Row, Col } from "../../components/grid";
import { CoffeeDetailCard, CoffeeAttribute } from "../../components/coffeeCardStyle";


const CoffeeCard = ({ coffee: { id, name, description, region, acidity, body, flavor } }) => {
    return (
        <CoffeeDetailCard>
            <Row className="header">
                <Col>
                    <h2>{name}</h2>
                </Col>
            </Row>
            <Row className="content">
                <Col md="6">
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
            <Row>
                <Col md='4'>Star Reviews</Col>
                <Col md='4'>Comment Number</Col>
                <Col md='4'><Link to={`${id}`}><button>View Coffee</button></Link></Col>
            </Row>
        </CoffeeDetailCard>
    )
};

export default CoffeeCard;