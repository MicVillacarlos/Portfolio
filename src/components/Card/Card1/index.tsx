import flightScheduler from "../../../assets/flightScheduler.png";
import { NewCard } from "./style";
import { useState } from "react";

const { Meta } = NewCard;

export const Card1 = () => {
  const [isClick, setClick] = useState(false);

  const click = () => {
    !isClick ? setClick(true) : setClick(false);
  };

  return (
    <NewCard
      onClick={click}
      cover={<img src={flightScheduler} alt="flightScheduler" />}
    >
      <Meta title={<h3>Flight Scheduler</h3>} />
      {isClick ? (
        <div>
          <br />
          <p>
            <b>Tech Stack:</b>
            <br />
            MongoDB, Mongoose, Express, React, NodeJs, Typescript, Chakra-Ui, emailJs
            <br />
            <br />
            Flight Scheduler is a project designed to help ease the process of scheduling students to their flight instructors. It has a basic CRUD system where instructors and mechanics have an admin access where they input/post their schedule of availability. Students will then book/grab the available schedule from the list. Finally, confirmed schedules will then be automatically emailed to the student via EmailJs.
            <br />
            <br />
            <a
              href="https://github.com/MicVillacarlos/Capstone"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo click here
            </a>
          </p>
        </div>
      ) : null}
    </NewCard>
  );
};
