import { Link } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from '../grid';
const DashBoardMenu = styled.ul`
    background-color: #ccc;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
    border-bottom: 1px solid black;
    li.header {
        font-weight: bold;
        text-transform: uppercase;
        padding-left: 1rem;
        cursor: default;
    }
    li {
        padding: 1rem;
        padding-left: 1.5rem;
        cursor: pointer;
    }
`

const Sidebar = () => {
    return (
        <DashBoardMenu>
            <li className='header'>Home</li>
            <li className='header'>Shops</li>
            <li><Link to="/Dashboard/MyShops">My Shops</Link></li>
            <li><Link to="/Dashboard/NewShop">Register A Shop</Link></li>
            <li className='header'>Brewing</li>
            <li>My Coffees</li>
            <li><Link to="/Dashboard/NewCoffee">Add A Coffee</Link></li>
            <li className='header'>Account</li>
            <li>My Profile</li>
            <li>My Favorites</li>
            <li>My Account</li>
        </DashBoardMenu>
    );
}

export default Sidebar;