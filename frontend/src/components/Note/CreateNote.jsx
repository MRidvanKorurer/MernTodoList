import React, { useContext, useState } from "react";
import noteContext from "../../context/noteContext";

const CreateNote = () => {
  const { createNote } = useContext(noteContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleClickAddNote = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    createNote(title, desc);
  };

  return (
    <React.Fragment>
      <form className=" flex flex-col justify-center items-center gap-10 mt-8">
        <input
          type="text"
          placeholder="Başlık..."
          className=" border rounded p-1 w-1/3  "
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Açıklama..."
          className="border rounded p-1 w-1/2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={7}
          name="desc"
        />

        <button
          onClick={handleClickAddNote}
          className=" bg-indigo-700 text-white rounded hover:bg-indigo-800 transition-all w-32 p-1">
          Not Ekle
        </button>
      </form>
    </React.Fragment>
  );
};

export default CreateNote;
