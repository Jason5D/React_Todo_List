import "./App.css";
import React from "react";
import AddFunction from "./components/input/input.js";
import ListFunction from "./components/list/list";

function App() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleChange() {
    setList([...list, text]);
    setText("");
  }
// This sets an empty box + empties the box after the add button is clicked

  function handleDeleteAll() {
    setList([]);
  }
// This deletes all the boxes using [] when the delete all button is clicked

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <div>
          <AddFunction
            value={text}
            handleTextChange={handleTextChange}
            handleChange={handleChange}
            handleDeleteAll={handleDeleteAll}
          />
              {/* This calls the values, both buttons */}
        </div>

        <ListFunction list={list} />
       
      </header>
    </div>
  );
}

export default App;
