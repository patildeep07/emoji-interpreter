import "./styles.css";
import { useState } from "react";

var emojiList = {
  "🙃": "Upside Down Face",
  "🤩": "Starstuck Face",
  "🥲": "Smiling Face with Tear",
  "😛": "Face with Tongue",
  "😠": "Angry Face",
  "✨": "Sparkles",
  "❤️": "Red Heart",
  "🔥": "Fire",
  "✔️": "Check Mark",
  "🎉": "Party Popper",
  "😍": "Smiling Face with Heart-Eyes",
  "😉": "Winking Face",
  "👀": "Eyes",
  "🥰": "Smiling Face with Hearts",
  "🥳": "Partying Face",
  "🥺": "Pleading Face",
  "😭": "Loudly Crying Face",
  "🤔": "Thinking Face"
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
      <h1 className="title"> Emoji Interpreter </h1>
      <input
        onChange={onChangeHandler}
        className="inputText"
        placeholder="Enter a Emoji Here.!!!"
      />
      <p className="known-emoji">Emoji's Meaning will be show here. 👇</p>
      <p className="output-div"> {meaning} </p>
      <p className="known-emoji">
        {" "}
        Emojis we Know are 👇. You can select any one of them to know their
        meaning.
      </p>
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
