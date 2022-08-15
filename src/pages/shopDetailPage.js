import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopById } from "../features/shops/shopSlice";
import { selectCoffeesByShop } from '../features/coffees/coffeeSlice';
import { selectCommentsByShopId } from "../features/comments/commentSlice";
import CoffeeCard from "../features/coffees/coffeeCard";
import styled from "styled-components";
import { Row, Container, Col } from "../components/grid";
import { CommentList } from "../features/comments/CommentList";
import CommentForm from "../features/comments/CommentForm";
import shopBg from '../assets/default_shop.png'
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
    /* Initialize brewing as an empty array so we can use it globally outside of the map function */
    let brewing = [];
    /* Shop ID comes from the URL params */
    const { shopId } = useParams();
    /* Get the current shop */
    const shop = useSelector(selectShopById(shopId));
    /* Get the comments for this shop */
    const comments = useSelector(selectCommentsByShopId(shopId));

    /* DISPLAY THE SHOP INFO */
    const display = shop.map(shop => {
        // We need to push the brewing array globally.
        brewing = shop.brewing;
        return (
            <ShopDetailCard>
                <h1>{shop.name}</h1>
                <h4>{shop.address}</h4>
                <p>{shop.description}</p>
            </ShopDetailCard>
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

    // MAIN RENDER FUNCTION - PUT ALL THE PARTS TOGETHER
    return (
        <>
            {display}
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