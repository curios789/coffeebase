import Header from "../components/Header";
import { Row, Col, Container } from "../components/grid";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useState, useEffect } from "react";
import { Card, CardHeader } from "../styled-components/Card";
const render = (status) => {
    return <h1>{status}</h1>;
};
const CoffeeMap = () => {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);
    return <div ref={ref} />
};

const shopPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Wrapper apiKey={"AIzaSyBy38H_iBfLHwX_mNHUX1-uzJVXgln2SOM"} render={render}>
                            <CoffeeMap
                                center={{
                                    lat: 42.944710,
                                    lng: -88.043282
                                }}
                                zoom={1} />
                        </Wrapper>
                    </Col>
                </Row>
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