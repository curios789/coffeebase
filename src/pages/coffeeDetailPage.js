import { useParams } from "react-router-dom";
import { selectCoffeeById } from "../features/coffees/coffeeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col, Container } from '../components/grid';
import "@fontsource/alegreya-sans-sc";
import "@fontsource/aleo";
import { CoffeeDetailCard, CoffeeAttribute } from "../components/coffeeCardStyle";
import { CoffeeCommentList } from "../features/comments/CommentList";
import latinamericabg from "../assets/latinamericabg.webp";
import africabg from "../assets/africabg.webp";
import southeastasiabg from "../assets/southeastasiabg.webp";
import CoffeeMap from "../features/map/CoffeeMap";
import { selectShopsByCoffeeId } from "../features/shops/shopSlice";


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
    const coffees = useSelector(selectCoffeeById(coffeeId));
    const shops = useSelector(selectShopsByCoffeeId(coffeeId));
    const display = coffees.map((coffee) => {
        return (
            <>
                <Row style={{ backgroundImage: `url(${selectBackgroundByRegion(coffee.region)})`, backgroundSize: 'cover' }}>
                    <Col>
                        <CoffeeDetailCard key={coffee.id}>
                            <Row className="header">
                                <Col>
                                    <h2>{coffee.name}</h2>
                                </Col>
                            </Row>
                            <Container>
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
                            </Container>
                            <p>{coffee.description}</p>
                        </CoffeeDetailCard>
                    </Col>
                </Row>
                <CoffeeMap shops={shops} />
                <Container>
                    <Row>
                        <Col>
                            <CoffeeCommentList coffee_id={coffeeId} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    });
    return (
        <>
            {display}
        </>
    )
}

export default CoffeeDetailPage;