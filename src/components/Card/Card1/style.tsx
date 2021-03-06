import { Card } from 'antd'
import styled from "styled-components";

export const NewCard = styled(Card)`
    &&&{
        width: 190px;
        padding:0.9em;
        overflow:hidden;
        font-family: ${(props)=>props.theme.font.secondary};
        color:${(props)=>props.theme.color.primary};
        border: solid 0.2px ${(props)=>props.theme.color.primary};
        border-radius: 5px;

        transition: transform 2s;

        :hover{
            transform: translateY(-4%);
            cursor: pointer;
            }
        img{
            max-width: 100%;
            max-height: 100%;
        }
        button{
            font-family: ${(props)=>props.theme.font.secondary};
            color: ${(props)=>props.theme.color.primary};
            border: 0;
        }
        p{
            color: ${(props)=>props.theme.color.primary};
        }
        a{
            text-decoration: none;
            color: ${(props)=>props.theme.color.primary};
        }
    }
`

