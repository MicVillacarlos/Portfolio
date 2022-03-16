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
      cover={<img src={basketballCalc} alt='basketballCalc' />}
    >    
      <Meta title={<h3>JS Calculator</h3>}/>
      <button onClick={click}>
        {isClick ? "See Less" : "See More"}
      </button> 
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                HTML, CSS, Javascript, Bootstrap<br/><br/>
                A Basketball themed functioning Calculator using Javascript<br/><br/>
                Github: https://github.com/MicVillacarlos/JsCalculator.git
              </p>
          </div>
        : null}
    </NewCard>
  )
}
