import React from "react";
import { Row, Col, Container } from "../components/grid";
import { selectAllShops } from "../features/shops/shopSlice";
import { useSelector } from "react-redux";
import CoffeeMap from "../features/map/CoffeeMap"
import ShopCard from "../features/shops/ShopCard";



const ShopPage = () => {
    const shops = useSelector(selectAllShops);
    const display = shops.map((shop) => {
        return <ShopCard shop={shop} key={shop.id} />
    });
    return (
        <>
            <Row>
                <Col>
                    <CoffeeMap shops={shops} />
                </Col>
            </Row>
            <Container>
                {display}
            </Container>
        </>
    )
}

export default ShopPage;