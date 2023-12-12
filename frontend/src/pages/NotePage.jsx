import React from "react";
import CreateNote from "../components/Note/CreateNote";
import NoteList from "../components/Note/NoteList";

const NotePage = () => {
  return (
    <React.Fragment>
      <CreateNote />
      <NoteList />
    </React.Fragment>
  );
};

export default NotePage;
