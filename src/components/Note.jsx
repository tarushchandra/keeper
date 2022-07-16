import React from "react";

function Note({ title, content, id, onDelete }) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="note-container">
      <div className="note">
        <h1>{title}</h1>
        <p className="content">{content}</p>
        <button onClick={handleClick}>
          <p>x</p>
        </button>
      </div>
    </div>
  );
}

export default Note;
