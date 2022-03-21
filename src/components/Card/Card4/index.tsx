import pokedex from '../../../assets/pokedex.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card4 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard onClick={click}
      cover={<img src={pokedex} alt='pokedex' />}
    >    
      <Meta title={<h3>Pokedex</h3>}/>
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                React, Typescript<br/><br/>
                A Pokedex app  that adds a pokemon on a list where the user can set it to hidden or delete it.<br/><br/>
                Github: <a href='https://github.com/MicVillacarlos/PokedexReact.git' target='_blank'  rel="noreferrer">Click here</a> 
              </p>
          </div>
        : null}
    </NewCard>
  )
}
