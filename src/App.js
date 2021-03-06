import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import TabularContent from "./TabularContent";

function App() {
  const [input, setInput] = useState();
  const [digit, setDigit] = useState();
  const [content, setContent] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((res) => res.text())
      .then((data) => {
        setContent(data);
      })
      .catch((err) => console.log(err));

    setDigit(input);
    setInput("");
  };

  return (
    <div className="app">
      <div className="header">
        <img
          src="https://invictus.in/wp-content/uploads/2020/11/cropped-New-Invictus-Logo-White-BG.png"
          alt="invictus"
        />
        <h1>TopWords Calc</h1>
        <p>words and their frequency calculator</p>
      </div>
      <form onSubmit={onsubmit} className="app__form">
        <FormControl>
          <InputLabel>Enter a number</InputLabel>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="number"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
          className="formBtn"
        >
          Submit
        </Button>
      </form>

      <TabularContent digit={digit} content={content} />
    </div>
  );
}

export default App;
