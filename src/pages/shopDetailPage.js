import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShopById, fetchOneShop } from "../features/shops/shopSlice";
import { fetchCoffees, selectCoffeesByShop } from '../features/coffees/coffeeSlice';
import { selectCommentsByShopId } from "../features/comments/commentSlice";
import CoffeeCard from "../features/coffees/coffeeCard";
import styled from "styled-components";
import { Row, Container, Col } from "../components/grid";
import { CommentList } from "../features/comments/CommentList";
import CommentForm from "../features/comments/CommentForm";
import shopBg from '../assets/default_shop.png'
import { useLayoutEffect } from "react";
import { formatTime } from "../utils/formatDate";
const ShopDetailCard = styled(Row)`
    background-image: url(${shopBg});
    background-size: cover;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: "Nunito Sans";
        border-bottom: 2px solid black;
    }
    h4 { 
        margin-top: 0;
        }
    p {
        background-color: rgba(255,255,255,0.4);
        padding:3em;
        font-family: "Aleo";
        font-size: 1.2rem;
        line-height: 1.7rem;
    }
`
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
    /* Shop ID comes from the URL params */
    const { shopId } = useParams();
    const [theShop, setShop] = useState(shopId);
    /*    const dispatch = useDispatch();
        useLayoutEffect(() => {
            const { shopId } = params();
            console.log("TEST CASE (PARAM) -" + shopId);
            dispatch(fetchOneShop(shopId));
        }, []);*/
    const isLoading = useSelector((state) => state.shops.isLoading);
    const errMsg = useSelector((state) => state.shops.errMsg);
    /* Get the current shop */
    const shop = useSelector(selectShopById(shopId));
    console.log(shop);
    /* Get the comments for this shop */
    const comments = useSelector(selectCommentsByShopId(shopId));
    const coffees = useSelector(selectCoffeesByShop(shop.brewing));
    const d = new Date();
    const hours = shop.hours[d.getDay()];
    const coffee = coffees.map((coffee) => {
        return (
            // Return a CoffeeCard for each coffee - we're going to put these two to a row here.
            <Col md='6'>
                <CoffeeCard coffee={coffee} />
            </Col>);
    })

    /* DISPLAY THE SHOP INFO */
    // We need to push the brewing array globally.
    if (isLoading) {
        return ("LOADING...")
    }
    if (errMsg) {
        console.log(errMsg);
        return ("ERROR");
    }
    console.log(isLoading);
    return (
        <>
            <ShopDetailCard>
                <h1>{shop.name}</h1>
                <h4>{shop.address}</h4>
                <h5>Open: {formatTime(hours.open)} Close: {formatTime(hours.close)}</h5>
                <p>{shop.description}</p>
            </ShopDetailCard>
            <NowBrewing>
                <Row>
                    <h1><em>Now Brewing...</em></h1>
                </Row>
                <Row>
                    {coffee}
                </Row>
            </NowBrewing>
            <Row>
                {/* The comment form needs to be sent a prop of which page it's coming from so we can properly handle the payload */}
                <Col><CommentForm type='shop' id={shopId} /></Col>
            </Row>
            <Container>
                {/* The CommentList component must be sent a payload of the comments to work. */}
                <CommentList comments={comments} />
            </Container>
        </>
    )
}
export default ShopDetailPage;