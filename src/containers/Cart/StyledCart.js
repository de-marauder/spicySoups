import styled from "styled-components";

export const Title = styled.h1`
    width: 100vw;
    padding: 20px 3em;
    position: fixed;
    top: 0;
    z-index: 20;
    background: #f3f4f5;
    box-shadow: 2px 0 10px #999;

    @media (max-width: 500px) {
        padding: 15px 1em
    }
`
export const OrdersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: 150px auto 50px;
    padding: 20px 0 ;
    background: #8cb340;
    border: 10px solid #8cb340;
    border-radius: 30px;

    @media (max-width: 500px) {
        width: 95vw
    }
`
export const RemoveFromCart = styled.span`
    position: absolute;
    right: -10px;
    background: #ff4444;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgb(250, 148, 148);
    transition: background 0.5s ease-in-out;

    &:hover {
        width: 33px;
        height: 33px;
        background: red
    }
`
export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 25px auto;
    background: white;
    border: 1px solid #8cb340;
`
export const OrderList = styled.div`
    box-shadow: inset 4px 4px 1px #666;
    border: 1px solid #666;
    padding: 4px 0 0 20px;
    width: 100%;

    @media (max-width: 500px) {
        padding: 4px 0
    }
`
export const OrderDiv = styled.div`
    text-align: center;
    padding-top: 20px;
    overflow-y: scroll;
    height: 50vh;
`
export const Order = styled.div`
    position: relative;
    margin: 10px auto;
    height: 6em;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 2px 2px 10px #777;

    @media (max-width: 500px) {
        width: 90%
    }
`
export const OrderImg = styled.img`
    width: 30%;
    padding: 5px;
    border-radius: 5px;
`
export const OrderDesc = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
        width: 70%
    }
`
export const OrderTitle = styled.h4`
    font-size: 18px;
`
export const OrderPrice = styled.p`
    font-size: 20px;
    font-weight: bold;
`
export const Naira = styled.span`
    text-decoration-line: line-through;
    text-decoration-style: double;
    padding-inline: 0.5rem
`

export const OrderSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    background: #666;
    color: wheat;
    padding: 10px 0;
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%
`