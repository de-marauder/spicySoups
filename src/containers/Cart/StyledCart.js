import styled from "styled-components";

export const Title = styled.h1`
    width: 100vw;
    padding: 30px 3em;
    position: fixed; 
`
export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 80vh;
    padding: 10px;
    overflow: scroll;
`
export const Order = styled.div`
    margin: 10px;
    width: 80%;
    display: flex;
    flex-direction: row
`
export const OrderImg = styled.img`
    width: 20%;
    padding: 5px;
    border-radius: 5px;
`
export const OrderDesc = styled.div`
    width: 80%
`
export const OrderTitle = styled.h4`
    font-size: 18px;
`
export const OrderPrice = styled.p

export const OrderSummary = styled.div`
    display: flex;
    align-items: flex-end
`