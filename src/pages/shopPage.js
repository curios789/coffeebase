import Header from "../components/Header";
import React from "react";
import { Row, Col, Container } from "../components/grid";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useState, useEffect } from "react";
import { Card, CardHeader } from "../styled-components/Card";
import { selectAllShops } from "../features/shops/shopSlice";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocode from "react-geocode";
mapboxgl.accessToken = 'pk.eyJ1IjoidW1zdG90ZGwiLCJhIjoiY2w2aTNwNW43MHZuYTNqczdmanM1c2VqMCJ9.AzOo6ZZ4e31ug3udKgd6vA';

const CoffeeMap = () => {
    const mapContainer = useRef(null);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [zoom, setZoom] = useState(12);
    const shops = useSelector(selectAllShops);
    console.log(shops);
    navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    });
    useEffect(() => {
        Geocode.setApiKey("AIzaSyBy38H_iBfLHwX_mNHUX1-uzJVXgln2SOM");
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        shops.map((shop) => {
            console.log(shop.id);
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<a href='shopPage/${shop.id}'>${shop.name}</a>`);
            Geocode.fromAddress(shop.address).then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log(lat, lng);
                    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map).setPopup(popup)
                },
                error => {
                    console.error(error);
                }
            );
        });
    });
    return (
        <div>
            <div ref={mapContainer} className="map-container" style={{ height: '400px' }} />
        </div>
    );
};

const shopPage = () => {
    return (
        <>
            <Row>
                <Col>
                    <CoffeeMap />
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

export default shopPage;