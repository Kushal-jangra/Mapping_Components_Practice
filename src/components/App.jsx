import React from "react";
import Things from "./things";
import emojipedia from "../emojipedia";

function chooseEmoji(emojipedia) {
  return (
    <Things
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(chooseEmoji)}</dl>
    </div>
  );
}

export default App;
