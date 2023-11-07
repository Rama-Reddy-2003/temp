// App.js
import React from "react";
import "./App.css";

const languages = [
  {
    name: "English",
    flag: "🇬🇧",
  },
  {
    name: "German",
    flag: "🇩🇪",
  },
  {
    name: "French",
    flag: "🇫🇷",
  },
  {
    name: "Spanish",
    flag: "🇪🇸",
  },
  {
    name: "Italian",
    flag: "🇮🇹",
  },
  {
    name: "Japanese",
    flag: "🇯🇵",
  },
  {
    name: "Portuguese",
    flag: "🇵🇹",
  },
  {
    name: "Russian",
    flag: "🇷🇺",
  },
  {
    name: "Turkish",
    flag: "🇹🇷",
  },
  {
    name: "Arabic",
    flag: "🇸🇦",
  },
  {
    name: "Chinese",
    flag: "🇨🇳",
  },
  {
    name: "Polish",
    flag: "🇵🇱",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Which language do you want to learn?</h1>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.flag} {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
