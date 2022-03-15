import styled,{keyframes} from "styled-components";


export const Container = styled.div`
    height: 40vh;
    padding: 5em;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const TitleAndButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
    gap:0.5em;

    border:${(props)=>props.theme.color.primary} 1px solid;
    border-radius: 30px;
    padding: 2em;
    color: ${(props)=>props.theme.color.primary};
    width: 30vw;
    font-family: ${(props)=>props.theme.font.secondary};
    h3{
        font-family: ${(props)=>props.theme.font.primary};
        text-align: center;
    }

    input {
        font-family: ${(props)=>props.theme.font.secondary};
        border:${(props)=>props.theme.color.primary} 1px solid;
        color:${(props)=>props.theme.color.primary};
        height: 20px;
    }
    textarea {
        font-family: ${(props)=>props.theme.font.secondary};
        height: 50px;
        border:${(props)=>props.theme.color.primary} 1px solid;
        resize: none;
        color:${(props)=>props.theme.color.primary};
    }
    button {
        font-family: ${(props)=>props.theme.font.secondary} ; 
        border:${(props)=>props.theme.color.primary} 1px solid;
        border-radius: 5px;
        width: 4em;
        color: ${(props)=>props.theme.color.primary};
        padding: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            cursor:pointer;
            background-color: ${(props)=>props.theme.color.primary};
            color:black;
        }
        &:active{
            transform: translateY(5%);
            color:white
        }
    }
`

export const SliderSection = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   width:100%;
   overflow: hidden;

`

export const Slider = styled.div`
    height: 200px;
    margin:0;
    width: 80vw;
    display:grid;
    place-items: center;
    overflow: hidden;
    background-color:transparent;
`
export const scroll = keyframes`
    0%{transform: translateX(0)}
    100%{transform: translateX(-20vw)}
`
export const SliderTrack = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    animation: ${scroll} 6s linear infinite
`

export const ImageContainer = styled.div`
    height:200px;
    width: 20vw;
    padding:0;
    display: flex;
    align-items: center;
    p{
        color: white
    }
`