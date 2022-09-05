import "./styles.css";
import { useState } from "react";

var emojiList = {
  "🙃": "Upside Down Face",
  "🤩": "Starstuck Face",
  "🥲": "Smiling Face with Tear",
  "😛": "Face with Tongue",
  "😠": "Angry Face"
};

var emojiArray = Object.keys(emojiList);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var emoji = event.target.value;
    // console.log(emoji);
    if (emoji in emojiList) var meaning = emojiList[emoji];
    if (meaning === undefined) {
      meaning = "This emoji Does not exist in DB";
    }
    setMeaning(meaning);
  }

  function onClickHandler(item) {
    var meaning = emojiList[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input onChange={onChangeHandler} className="inputText" />
      <p> {meaning} </p>
      <p> Emojis we Know </p>
      <ul>
        {emojiArray.map(function (item) {
          return (
            <span
              onClick={() => onClickHandler(item)}
              className="emoList"
              key={item}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
