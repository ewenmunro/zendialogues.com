import React, { Fragment, useState, useRef } from "react";
import "./styles.css";

// components
import JoinCommunity from "./JoinCommunity";

// image
import image from "../img/the_buddha_image.png";

function ChatRoom() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Saturday, Feb 15 1992") {
      isActive = false;
    }
    const status = document.querySelector(".status");
    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = [
      "fuck|bad|stupid|useless|bitch|crazy|nonsense|cunt|asshole",
    ];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "This is a sacred place. Please respect it.";
        inputRef.value = "";
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|what's up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye|sato|Sato"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "Sato";
        inputRef.value = "";
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = "";
      }, 2000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "I am well, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = "";
      }, 2000);
    }

    let good = [
      "that's good|That's good|sounds nice|Sounds nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "😊";
        inputRef.value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Some call me The Buddha, others call me Siddhartha. You may call me whichever one you wish. I don't mind.";
        inputRef.value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ];
    let words9 = new RegExp(ageAsk);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "I have been around for quite some time";
        inputRef.value = "";
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value;

    let meaningAsk = [
      "what's the meaning of life|What's the meaning of life|what is the meaning of life|What is the meaning of life|is there a meaning to life|Is there a meaning to life|does life have meaning|Does life have meaning|what is the point of life|What is the point of life|what's the point of life|What's the point of life",
    ];
    let words10 = new RegExp(meaningAsk);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText = "An empty bowl";
        inputRef.value = "";
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value;

    let secretAsk = [
      "is there a secret to life|Is there are secret to life|what is the secret to life|What is the secret to life|what's the secret to life|What's the secret to life|what is the secret|What is the secret|what's the secret|What's the secret",
    ];
    let words11 = new RegExp(secretAsk);
    if (words11.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "...";
      setTimeout(() => {
        getBotMessage.innerText =
          "A flower that has withered cannot blossom again";
        inputRef.value = "";
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInput();
    }
  };

  return (
    <Fragment>
      <div className="ChatRoom" onLoad={checkStatus}>
        <div className="container">
          <div className="content">
            <div className="header">
              <div className="img">
                <img src={image} alt="" />
              </div>
              <div className="right">
                <div className="name">The Buddha</div>
                <div className="status">Active</div>
              </div>
            </div>
            <div className="main">
              <div className="main_content">
                <div className="messages">
                  <div
                    className="bot-message"
                    id="message1"
                    ref={botmessage}
                  ></div>
                  <div
                    className="human-message"
                    id="message2"
                    ref={humanMessage}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="btm">
                <div className="input">
                  <input
                    type="text"
                    id="input"
                    placeholder="Ask The Buddha anything"
                    ref={input}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    Send<i class="fa-regular fa-om"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinCommunity />
      <div className="Extra-Space"></div>
    </Fragment>
  );
}

export default ChatRoom;
