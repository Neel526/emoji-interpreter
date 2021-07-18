import "./styles.css";
import { useState } from "react";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function clickChangeHandler() {
    abc = likeCounter + 1;
    // console.log("clicked", likeCounter);
    setLikeCounter(abc);
  }

  return (
    <div className="App">
      <h1>inside outttt</h1>
      <button onClick={clickChangeHandler}> click me! </button> {likeCounter}
    </div>
  );
}
