import React from "react";
import { useState } from "react";
import Cards from "../pages/api/Cards";


const Flashcard = () => {

    const [flippedTop,setFlippedTop] = useState(false)
    const [hideBot,setHideBot] = useState(true)

    const flipCard = () => {
        setFlippedTop((prevState) => !prevState);
        setHideBot((prevState) => !prevState);
    }

    const topHidden = flippedTop? 'block':'hidden';
    const botHidden = hideBot? 'block' : 'hidden';

    const [randomNumber,setRandomNumber] = useState('')
    const questions = Cards.question.length

    const createRandomNumber = () => {
        setRandomNumber((prevState) => Math.floor(Math.random()*questions))
    }

    

  return (
    <div className="">
      <article onClick={flipCard}>
        <div className={` ${topHidden} rounded-xl flex-wrap border-2 p-10 cursor-pointer`}>
          <h3 className="text-2xl font-bold">{Cards.deck[0]}</h3>
          <p className="mt-4 text-xl">
            {Cards.question[randomNumber]}
          </p>
        </div>

        <div className={` ${botHidden} rounded-xl flex-wrap border-2 p-10 cursor-pointer`}>

        <h3 className="text-2xl font-bold">{Cards.deck[1]}</h3>
          <p className="mt-4 text-xl">
            {Cards.backCard[randomNumber]}
          </p>
        

        </div>
        
      </article>

<button onClick={createRandomNumber} className="mt-10 bg-green-800 text-white p-4 border-4 border-black rounded-xl">Generate Next Card</button>
    </div>
  );
};

export default Flashcard;
