import styled from "styled-components";
// THIS IS MY STYLED COMPONENTS GRID SYSTEM
export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    `
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const Col = styled.div`
    width: 100%;
    /* SMALL */
    @media (min-width: 576px) {
        flex: ${(props) => (props.sm * 8.3333333333)}%;
        max-width: ${(props) => (props.sm * 8.3333333333)}%;
    }
    /* MEDIUM */
    @media (min-width: 768px) {
        flex: ${(props) => (props.md * 8.3333333333)}%;
        max-width: ${(props) => (props.md * 8.3333333333)}%;
    }
    /* LARGE */
    if (props.lg) {
    @media (min-width: 992px) {
        flex: ${(props) => (props.lg * 8.3333333333)}%;
        max-width: ${(props) => (props.lg * 8.3333333333)}%;
    }
    }
    /* XTRA LARGE */
    @media (min-width: 1200px) {
        flex: ${(props) => (props.xl * 8.3333333333)}%;
    max-width: ${(props) => (props.xl * 8.3333333333)}%;
    }
`;