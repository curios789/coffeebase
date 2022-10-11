import React from "react";
import { Row, Col, Container } from "../components/grid";
import { fetchShops, selectAllShops } from "../features/shops/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import CoffeeMap from "../features/map/CoffeeMap"
import ShopCard from "../features/shops/ShopCard";
import { useEffect } from "react";



const ShopPage = () => {
    const shops = useSelector(selectAllShops);
    const display = shops.map((shop) => {
        return <ShopCard shop={shop} key={shop._id} />
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