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
    <NewCard
      cover={<img src={pokedex} alt='pokedex' />}
    >    
      <Meta title={<h3>Pokedex</h3>}/>
      <button onClick={click}>
        {isClick ? "See Less" : "See More"}
      </button> 
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                React, Typescript<br/><br/>
                A simple Pokedex app which you can set some post to hidden. Implemented form-validation and utilized react hooks.<br/><br/>
                Github: https://github.com/MicVillacarlos/intro-to-react.git
              </p>
          </div>
        : null}
    </NewCard>
  )
}
