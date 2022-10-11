import { useParams } from "react-router-dom";
import { selectCoffeeById } from "../features/coffees/coffeeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col, Container } from '../components/grid';
import "@fontsource/alegreya-sans-sc";
import "@fontsource/aleo";
import { CoffeeDetailCard, CoffeeAttribute } from "../components/coffeeCardStyle";
import { CommentList } from "../features/comments/CommentList";
import latinamericabg from "../assets/latinamericabg.webp";
import africabg from "../assets/africabg.webp";
import southeastasiabg from "../assets/southeastasiabg.webp";
import CoffeeMap from "../features/map/CoffeeMap";
import { selectShopsByCoffeeId } from "../features/shops/shopSlice";
import { selectCommentsByCoffeeId } from "../features/comments/commentSlice";
import CommentForm from "../features/comments/CommentForm";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CoffeeDetailPage = () => {
    const selectBackgroundByRegion = (region) => {
        const imagePath = region.replace(/\s+/g, '').toLowerCase();
        switch (imagePath) {
            case "latinamerica":
                return latinamericabg;
            case "africa":
                return africabg;
            case "southeastasia":
                return southeastasiabg;
        }
    }
    const { coffeeId } = useParams();
    const [theCoffee, setCoffee] = useState(coffeeId);
    console.log(theCoffee);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.coffees.isLoading);
    const errMsg = useSelector((state) => state.coffees.errMsg);
    const coffees = useSelector(selectCoffeeById(theCoffee));
    const shops = useSelector(selectShopsByCoffeeId(coffeeId));
    const comments = useSelector(selectCommentsByCoffeeId(coffeeId));
    if (isLoading) {
        return ("LOADING...")
    }
    if (errMsg) {
        console.log(errMsg);
        return ("ERROR");
    }
    let i = 0;
    console.log(i)
    console.log(coffees)
    return (
        <>
            <Row style={{ backgroundImage: `url(${selectBackgroundByRegion(coffees.region)})`, backgroundSize: 'cover' }}>
                <Col>
                    <CoffeeDetailCard key={coffees.id}>
                        <Row className="header">
                            <Col>
                                <h2>{coffees.name}</h2>
                            </Col>
                        </Row>
                        <Container>
                            <Row className="content">
                                <Col md="6">
                                    <h3>Key Attributes:</h3>
                                    <ul>
                                        <CoffeeAttribute key='region' region={coffees.region.replaceAll(' ', '-').toLowerCase()}>Region: {coffees.region}</CoffeeAttribute>
                                        <CoffeeAttribute key='body'> Body: {coffees.body}</CoffeeAttribute>
                                        <CoffeeAttribute key='acidity'>Acidity: {coffees.acidity}</CoffeeAttribute>
                                    </ul>
                                </Col>
                                <Col md="6">
                                    <h3>Flavor Notes:</h3>
                                    <ul>
                                        {coffees.flavor.map((flavor) => { return (<CoffeeAttribute key={flavor}>{flavor}</CoffeeAttribute>) })}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                        <p>{coffees.description}</p>
                    </CoffeeDetailCard>
                </Col>
            </Row>
            <h1 style={{ fontFamily: "Nunito Sans" }}>Who's Brewing?</h1>
            <CoffeeMap shops={shops} />
            <CommentForm type="coffees" id={coffeeId} />
            <Container>
                <Row>
                    <Col>
                        <CommentList comments={comments} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default CoffeeDetailPage;