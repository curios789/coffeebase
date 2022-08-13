import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopById } from "../features/shops/shopSlice";
import CoffeeMap from "../features/map/CoffeeMap";
import { selectCoffeesByShop } from '../features/coffees/coffeeSlice';
import CoffeeCard from "../features/coffees/coffeeCard";
import styled from "styled-components";
import { Row, Container, Col } from "../components/grid";

const NowBrewing = styled(Container)`
    h1 {
        width: 100%;
        text-align: center;
        position: relative;
        font-family: 'Nunito Sans';
    }
    h1:after {
        content: '';
        width: 60px;
        height: 4px;
        background: gray;
        position: absolute;
        left: 48%;
        bottom: -4px;
    }
`
const ShopDetailPage = () => {
    let brewing = [];
    const { shopId } = useParams();
    const shop = useSelector(selectShopById(shopId));
    console.log(shop);
    const display = shop.map(shop => {
        // We need to push the brewing array globally.
        brewing = shop.brewing;
        return (
            <>
                <h1>{shop.name}</h1>
                <p>{shop.description}</p>
            </>
        )
    });

    // now brewing - select coffees from brewing array that we exported from the previous map function
    const coffees = useSelector(selectCoffeesByShop(brewing));
    const coffee = coffees.map((coffee) => {
        return (
            // Return a CoffeeCard for each coffee - we're going to put these two to a row here.
            <Col md='6'>
                <CoffeeCard coffee={coffee} />
            </Col>);
    })
    console.log(shop);
    return (
        <>
            <Row>
                {display}
            </Row>
            <NowBrewing>
                <Row>
                    <h1><em>Now Brewing...</em></h1>
                </Row>
                <Row>
                    {coffee}
                </Row>
            </NowBrewing>
        </>
    )
}
export default ShopDetailPage;