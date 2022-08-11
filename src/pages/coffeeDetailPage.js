import { useParams } from "react-router-dom";
import { selectCoffeeById } from "../features/coffees/coffeeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col, Container } from '../components/grid';
import "@fontsource/alegreya-sans-sc";
import "@fontsource/aleo";
import { CoffeeDetailCard, CoffeeAttribute } from "../components/coffeeCardStyle";
import { CoffeeCommentList } from "../features/comments/CommentList";
import { useState } from "react";


const CoffeeDetailPage = () => {
    const { coffeeId } = useParams();
    const coffee = useSelector(selectCoffeeById(coffeeId));
    return (
        <Container>
            <Row>
                <Col>
                    <CoffeeDetailCard key={coffee.id}>
                        <Row className="header">
                            <Col>
                                <h2>{coffee.name}</h2>
                            </Col>
                        </Row>
                        <Row className="content">
                            <Col md="6">
                                <h3>Key Attributes:</h3>
                                <ul>
                                    <CoffeeAttribute key='region' region={coffee.region.replaceAll(' ', '-').toLowerCase()}>Region: {coffee.region}</CoffeeAttribute>
                                    <CoffeeAttribute key='body'> Body: {coffee.body}</CoffeeAttribute>
                                    <CoffeeAttribute key='acidity'>Acidity: {coffee.acidity}</CoffeeAttribute>
                                </ul>
                            </Col>
                            <Col md="6">
                                <h3>Flavor Notes:</h3>
                                <ul>
                                    {coffee.flavor.map((flavor) => { return (<CoffeeAttribute key={flavor}>{flavor}</CoffeeAttribute>) })}
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
                <Col>
                    <CoffeeCommentList coffee_id={coffeeId} />
                </Col>
            </Row>
        </Container>
    );
}

export default CoffeeDetailPage;