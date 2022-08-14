import styled, { keyframes } from "styled-components";
import { Row } from "./grid";
import latinamericaimage from "../assets/latinamericabg.webp";
import { merge, fadeIn, slideInLeft, lightSpeedIn } from "react-animations";

export function regionBg(region) {
    switch (region) {
        case "latin-america":
            return "blah";
    }
}
export function regionColor(region) {
    switch (region) {
        case "latin-america":
            return "#69c7b7";
        case "africa":
            return "#c25b5b";
        case "southeast-asia":
            return "#c2bf5b";
        default:
            return "#d8b796";
    }
}
const fadeInAnimation = keyframes`${slideInLeft}`;
export const CoffeeDetailCard = styled.div`
    margin-top: 2em;
    background-image: ${(props) => regionBg(props.region)};
    animation: 1s ${fadeInAnimation};
    .header {
        font-size: 18px;
        font-family: "Nunito Sans";
    }
    h2 { font-weight: 800}
    .content {
        padding: 15px;
        font-family: "Alegreya Sans SC";
        h3 {
            margin: 5px 5px 5px 5px;
            padding: 10px;
            background-color: #c79b69;
            border-radius: 3px;
        }
    }
    ul {
        list-style: none;
        text-align: left;
        margin: 0px;
        padding: 0px;
    }
    button {
        background: limegreen;
        padding: 10px;
        font-family: "Alegreya Sans SC";
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 3px;
        transition: background .4s;
        :hover {
            background: green;
        }
    }
`

export const CoffeeCardFooter = styled(Row)`
    font-size: 1em;
    padding: 10px;
    div {
       display: flex;
       align-items: center;
       justify-content: center;
    }
`
export const CoffeeAttribute = styled.li`
    border-radius: 3px;
    margin: 3px;
    padding: 10px;
    background-color: ${(props) => regionColor(props.region)};
    font-weight: bold; `