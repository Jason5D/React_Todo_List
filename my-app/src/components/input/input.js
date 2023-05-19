import React from "react";

function AddFunction(props) {
  return (
    <div>

      <input
        placeholder="Enter a task..."
        id="styleinput"
        type="text"
        required
// This doesn't work ... yet
        value={props.value}
        onChange={props.handleTextChange}
      />

      <button id="styleadd" onClick={props.handleChange}>
        Add
      </button>
{/* this is the add button that gets passed to the app.js */}

      <button id="styledelete" onClick={props.handleDeleteAll}>
        Delete All
      </button>
{/* this is the delete all button that gets passed to the app.js */}

    </div>
  );
}

export default AddFunction;
