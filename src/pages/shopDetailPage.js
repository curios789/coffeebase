import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopById } from "../features/shops/shopSlice";

const ShopDetailPage = () => {
    const { shopId } = useParams();
    console.log(typeof (shopId));
    const shop = useSelector(selectShopById(shopId));
    console.log(shop);
    return (
        <>
            <h1>{shop.name}</h1>
            <p>{shop.description}</p>
        </>
    )
}
export default ShopDetailPage;