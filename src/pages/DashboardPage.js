import { useSelector } from 'react-redux';
import { Row, Col, Container } from '../components/grid';
import styled from 'styled-components';
import { boxSizing } from '@mui/system';
import * as Widget from '../styled-components/dashboard/widgets';
import { selectShopsByUserId } from '../features/shops/shopSlice';
import { selectCoffeeByUserId } from '../features/coffees/coffeeSlice';
import { userSelector } from '../features/users/userSlice';
import Sidebar from '../components/dashboard/sidebar';

const DashboardPage = () => {
    //const userId = useSelector(userSelector());
    const userId = useSelector((state) => state.user.userId);
    // console.log(userId);
    const shops = useSelector(selectShopsByUserId(userId));
    const coffees = useSelector(selectCoffeeByUserId(userId));
    return (
        <>
            <Row>
                <Col md='2'>
                    <Sidebar />
                </Col>
                <Col md='10'>
                    <Container style={{ 'padding': '1em' }}>
                        <Row>
                            <Widget.SmWidgetContainer>
                                <Widget.SmWidgetTitle>
                                    Your Shops
                                </Widget.SmWidgetTitle>
                                <Widget.SmWidgetList>
                                    {shops.map(shop => {
                                        return (
                                            <li key={shop._id} className='SmWidgetListItem'>
                                                <Widget.SmWidgetUser>{shop.name}</Widget.SmWidgetUser>
                                                <Widget.SmWidgetButton>View</Widget.SmWidgetButton>
                                            </li>
                                        )
                                    })}
                                </Widget.SmWidgetList>
                            </Widget.SmWidgetContainer>
                            <Widget.SmWidgetContainer>
                                <Widget.SmWidgetTitle>
                                    Your Coffees
                                </Widget.SmWidgetTitle>
                                <Widget.SmWidgetList>
                                    {coffees.map(coffee => {
                                        return (
                                            <li key={coffee._id} className='SmWidgetListItem'>
                                                <Widget.SmWidgetUser>{coffee.name}</Widget.SmWidgetUser>
                                                <Widget.SmWidgetButton>View</Widget.SmWidgetButton>
                                            </li>
                                        )
                                    })}
                                </Widget.SmWidgetList>
                            </Widget.SmWidgetContainer>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default DashboardPage;