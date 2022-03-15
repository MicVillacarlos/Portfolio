import styled from 'styled-components'

export const ContainerCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    color:yellow;
    gap:1em;
    padding:1em;
    p{
        color:yellow
    }
`

export const H2 = styled.div`
    font-family:${(props)=>props.theme.font.primary};
    color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f4bd0b;
    margin: 2em;
    display:flex;
    align-items:center;
    justify-content:center;
    :hover{
        color:${(props)=>props.theme.color.primary}
    }
`