import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("Emoji's");

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Not in our Database");
    }
  }

  return (
    <div className="App">
      <h1>inside outttt</h1>
      <input onChange={changeHandler} />
      <div> {emoji} </div>
      <div> {meaning} </div>
    </div>
  );
}
