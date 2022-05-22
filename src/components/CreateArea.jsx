import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function HandleTitleChange(e) {
    const newInput = e.target.value;
    setNote({ title: newInput });
  }

  function HandleContentChange(e) {
    const newInput = e.target.value;
    setNote((preValues) => {
      return {
        title: preValues.title,
        content: newInput,
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={HandleTitleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={HandleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />{" "}
        <button onClick={submitNote}>Add</button>{" "}
      </form>{" "}
    </div>
  );
}
export default CreateArea;
