import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text"
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="A chatbot is software that simulates human-like conversations with users via chat. Its key task is to answer user questions with instant messages."
      />
      <Feature
        title="Knowledgebase"
        text="Knowledgebase is the electronic repository, and associated authoring, approval and search tools, which contains known errors and their resolutions or workarounds, procedural guidelines, how-to information and frequently asked questions."
      />
      <Feature
        title="Education"
        text="Students and teachers can speak, gesture, sketch, and use other natural human modes of communication to interact with a computational resource and each other."
      />
    </div>
  </div>
);

export default WhatGPT3;
