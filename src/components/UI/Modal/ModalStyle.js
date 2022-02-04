import styled from 'styled-components'

export const ModalStyle = styled.div`
    width: 60vw;
    min-height: 300px;
    background: #eee;
    box-shadow: 0 3px 10px #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 35;
    position: fixed;
    top: 25vh;
    right: calc(40vw/2);

    @media (max-width: 500px) {
        width: 80%;
        right: calc(20%/2);
    }
`