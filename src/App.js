import "./styles.css";
import { useState } from "react";

const emojiList = {
  "😀": "happy",
  "😍": "liked-it",
  "🤑": "money-money",
  "🤯": "amazed",
  "🙏": "namaskar",
  "👁": "third-eye",
  "🌎":"earth",
  "🎂":"cake",
  "😎":"swag-guy",
  "🐱‍🚀":"astro-cat",
  "🤖":"robot",
  "🤡":"clown"
};

const emoji = Object.keys(emojiList);

export default function App() {
  const [setEmojiValue, updateEmojiValue] = useState("Click on emoji");
  const [setEmoji, updateEmoji] = useState("Emojiii villa");

  function getemojiInfo(event) {
    const inputEmoji = event.target.value;

    if (emojiList[inputEmoji]) {
      updateEmoji(emojiList[inputEmoji]);
    } else {
      updateEmoji("no emoji found");
    }
  }

  function getEmojiInfo(event) {
    console.log(event.target.innerText);
    let emojivalue = event.target.innerText;

    updateEmojiValue(`This is ${emojiList[emojivalue]}`);
    //console.log(emojiList[emojivalue]);
  }

  return (
    <div className="App">
      <h1>Know your Emoji </h1>
      <input onChange={getemojiInfo} type="text" />

      <h1>{setEmoji}</h1>
      <h2>{setEmojiValue}</h2>

      <div style={{ marginTop: "12px", paddingRight: "12px" }}>
        {emoji.map((e) => {
          return (
            <span
              onClick={getEmojiInfo}
              style={{ padding: "12px", fontSize: "32px" }}
            >
              {e}
            </span>
          );
        })}
      </div>
    </div>
  );
}
