import canvasClock from '../../../assets/canvasClock.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card5 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard 
      onClick={click}
      cover={<img src={canvasClock} alt='canvasClock' />}
    >    
      <Meta title={<h3>Canvas Clock & Timer</h3>}/>
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
              HTML, CSS, Javascript, Bootstrap<br/><br/>
                A clock and timer application that renders its number using the HTML Canvas element <br/><br/>
                Github: <a href='https://github.com/MicVillacarlos/Canvas-ClockAndTimer.git' target="_blank"  rel="noreferrer">Click here</a>
              </p>
          </div>
        : null}
    </NewCard>
  )
}
