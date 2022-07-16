import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

export const ThemeContext = createContext(null);

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  }

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((curNote, curIndex) => {
        return curIndex !== id;
      });
    });
  }

  const filteredNotes = notes.filter((curNote) => {
    return curNote.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div id={theme}>
        <div className="app">
          <Header onSearch={setSearchText} toggleTheme={toggleTheme} />
          <CreateArea onAdd={addNote} />
          {filteredNotes.map((note, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
