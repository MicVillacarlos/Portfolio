import basketballCalc from '../../../assets/basketbalCalc.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card6 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard 
      onClick={click}
      cover={<img src={basketballCalc} alt='basketballCalc' />}
    >    
      <Meta title={<h3>JS Calculator</h3>}/>
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                HTML, CSS, Javascript, Bootstrap<br/><br/>
                A Basketball themed functioning Calculator using Javascript<br/><br/>
                Github: <a href='https://github.com/MicVillacarlos/JsCalculator.git' target='_blank' rel="noreferrer">Click here</a>
              </p>
          </div>
        : null}
    </NewCard>
  )
}
