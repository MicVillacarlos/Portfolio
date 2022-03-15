import flightScheduler from '../../../assets/flightScheduler.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card1 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard
      cover={<img src={flightScheduler} alt='flightScheduler' />}
    >    
      <Meta title={<h3>Flight Scheduler</h3>}/>
      <button onClick={click}>
        {isClick ? "See Less" : "See More"}
      </button> 
        {isClick ? 
          <div>
              <br/>
              <em>Status: Unfinished</em>
              <p>Capstone Project<br/><br/>
              <b>Tech Stack:</b><br/>
                MongoDB, Mongoose, Express, React, NodeJs, Typescript
              </p>
          </div>
        : null}
    </NewCard>
  )
}
