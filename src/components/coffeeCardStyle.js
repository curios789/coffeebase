import styled from "styled-components";
export function regionColor(region) {
    console.log(region);
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

export const CoffeeDetailCard = styled.div`
    border: 1px solid black;
    margin-top: 2em;
    .header {
        border-bottom: 1px solid black;
    }
    .content {
        font-family: "Alegreya Sans SC";
        h3 {
            margin: 5 0 0 0;
            padding: 0;
        }
    }
    ul {
        list-style: none;
        text-align: left;
    }
`
export const CoffeeAttribute = styled.li`
    border-radius: 3px;
    margin: 3px;
    padding: 10px;
    background-color: ${(props) => regionColor(props.region)};
    font-weight: bold; `