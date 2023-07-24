import React from "react";

import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Let's embark on a journey to build something truly remarkable with GPT-3 from OpenAI!
        As one of the most advanced language models, GPT-3 opens up a world of possibilities
        for creating innovative applications and solutions
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
