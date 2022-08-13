import Header from "../components/Header";
import React from "react";
import { Row, Col, Container } from "../components/grid";
import { useRef, useState, useEffect } from "react";
import { Card, CardHeader } from "../styled-components/Card";
import { selectAllShops } from "../features/shops/shopSlice";
import { useSelector } from "react-redux";
import CoffeeMap from "../features/map/CoffeeMap"



const ShopPage = () => {
    const shops = useSelector(selectAllShops);
    return (
        <>
            <Row>
                <Col>
                    <CoffeeMap shops={shops} />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Find Your Favorite Coffee Shop!
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShopPage;