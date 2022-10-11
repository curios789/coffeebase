import Sidebar from "../dashboard/sidebar"
import { Row, Col } from "../grid";
import { useSelector } from "react-redux"
import { selectShopsByUserId } from "../../features/shops/shopSlice";
import * as Widget from '../../styled-components/dashboard/widgets'

const MyShops = () => {
    const userId = useSelector((state) => state.user.userId);
    const shops = useSelector(selectShopsByUserId(userId));
    return (
        <Row>
            <Col md="2">
                <Sidebar />
            </Col>
            <Col md="10">
                <Widget.LgWidgetContainer>
                    <Widget.LgWidgetTitle>Your Shops</Widget.LgWidgetTitle>
                    <Widget.LgWidgetTable>
                        <tr>
                            <Widget.LgWidgetTh style={{ textAlign: "left" }}>Name</Widget.LgWidgetTh>
                            <Widget.LgWidgetTh style={{ textAlign: "center" }}>Address</Widget.LgWidgetTh>
                            <Widget.LgWidgetTh style={{ textAlign: "center" }}># of Coffees</Widget.LgWidgetTh>
                            <Widget.LgWidgetTh style={{ textAlign: "center" }}>Manage</Widget.LgWidgetTh>
                        </tr>
                        {shops.map((shop) => {
                            return (
                                <tr>
                                    <Widget.LgWidgetUser>{shop.name}</Widget.LgWidgetUser>
                                    <Widget.LightTd>{shop.address}</Widget.LightTd>
                                    <Widget.LightTd>{shop.brewing.length}</Widget.LightTd>
                                    <Widget.LgWidgetButton style={{ color: "grey" }}>Manage</Widget.LgWidgetButton>
                                </tr>
                            )
                        })}
                    </Widget.LgWidgetTable>
                </Widget.LgWidgetContainer>
            </Col>
        </Row>
    )
}

export default MyShops;