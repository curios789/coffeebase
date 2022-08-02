import { useParams } from "react-router-dom";
import { selectCoffeeById } from "../features/coffees/coffeeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col, Container } from '../components/grid';
import "@fontsource/alegreya-sans-sc";
import "@fontsource/aleo";
import { CoffeeDetailCard, CoffeeAttribute } from "../components/coffeeCardStyle";


const CoffeeDetailPage = () => {
    const { coffeeId } = useParams();
    const coffee = useSelector(selectCoffeeById(coffeeId));
    return (
        <Container>
            <Row>
                <Col>
                    <CoffeeDetailCard>
                        <Row className="header">
                            <Col>
                                <h2>{coffee.name}</h2>
                            </Col>
                        </Row>
                        <Row className="content">
                            <Col md="6">
                                <ul>
                                    <CoffeeAttribute region={coffee.region.replaceAll(' ', '-').toLowerCase()}>Region: {coffee.region}</CoffeeAttribute>
                                    <CoffeeAttribute> Body: {coffee.body}</CoffeeAttribute>
                                    <CoffeeAttribute>Acidity: {coffee.acidity}</CoffeeAttribute>
                                </ul>
                            </Col>
                            <Col md="6">
                                <h3>Flavor Notes:</h3>
                                <ul>
                                    {coffee.flavor.map((flavor) => { return (<CoffeeAttribute>{flavor}</CoffeeAttribute>) })}
                                </ul>
                            </Col>
                        </Row>
                        <p>{coffee.description}</p>
                    </CoffeeDetailCard>
                </Col>
            </Row>
            <Row>
                Map will go here
            </Row>
            <Row>
                Comments will go here
            </Row>
        </Container>
    );
}

export default CoffeeDetailPage;