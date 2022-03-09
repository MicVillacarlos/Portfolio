import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height:100vh;

    img{ 
        width: 520px;
        @media (max-width:768px) {
        width: 400px;
        }
        @media (max-width:425px) {
        width: 280px;
        }
        @media (max-width:375px) {
        width: 220px;
        }

    }
`

export const ContainerSlide = styled.div`
        animation: scroll 5s linear infinite;
        display: flex;

        img{
            width:100%;
        }
        @keyframes scroll {
            0%{
                transform: translateX(0%);
            }
            100%{
                transform: translateX(-100%);
            }
        }    
`
