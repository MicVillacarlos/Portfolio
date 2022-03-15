import weather from '../../../assets/weather.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card3 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard
      cover={<img src={weather} alt='weather' />}
    >    
      <Meta title={<h3>Weather App</h3>}/>
      <button onClick={click}>
        {isClick ? "See Less" : "See More"}
      </button> 
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                React, Typescript<br/><br/>
                Weather-app utilizing the AccuWeather API. You can check the weather 
                information of the given cities for the to current and upcomimng 4 days. <br/><br/>
                Github: https://github.com/MicVillacarlos/weather-app.git
              </p>
          </div>
        : null}
    </NewCard>
  )
}
