import toDo from '../../../assets/toDo.png';
import { NewCard } from './style';
import { useState } from 'react';

const { Meta } = NewCard;

export const Card2 = () => {
const [isClick,setClick] = useState(false)

const click = () => {
  !isClick ? setClick(true) : setClick(false)
}

  return (
    <NewCard
      cover={<img src={toDo} alt='toDo' />}
    >    
      <Meta title={<h3>To Do App</h3>}/>
      <button onClick={click}>
        {isClick ? "See Less" : "See More"}
      </button> 
        {isClick ? 
          <div>
              <p><br/>
              <b>Tech Stack:</b><br/>
                MongoDB, Mongoose, Express, React, NodeJs, Typescript
                <br/><br/>
                A simple todo app that has a separate client and server app with basic CRUD features communicated via API.
                <br/><br/>
                Github: https://github.com/MicVillacarlos/ToDoList.git
              </p>
          </div>
        : null}
    </NewCard>
  )
}
