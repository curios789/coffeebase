import styled from "styled-components"

export const SmWidgetContainer = styled.div`
    flex: 1;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`
export const SmWidgetTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`
export const SmWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
export const SmWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    .SmWidgetListItem{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;
    }
`
export const SmWidgetUser = styled.div`
    display: flex;
    flex-direction: column;
    .SmWidgetUsername{
        font-weight: 600;
    }
.SmWidgetUserTitle{
        font-weight: 300;
    }
`
export const SmWidgetButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #008000;
    color: #fff;
    cursor: pointer;
    .SmWidgetIcon{
        font-size: 16px !important;
        margin-right: 5px;
    }
`
export const LgWidgetContainer = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`
export const LgWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
export const LgWidgetButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color:${props => props.bgColor || "lightgreen"};
    color:${props => props.fdColor || "#2a7ade"};
`
export const LgWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`
export const LgWidgetTh = styled.th`
    text-align: left;
`
export const LgWidgetUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const LgWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const LightTd = styled.td`
    font-weight: 300;
`