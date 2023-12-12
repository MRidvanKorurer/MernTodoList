import React, { useContext } from "react";
import noteContext from "../../context/noteContext";

const NoteShow = ({ item }) => {
  const { deleteNote } = useContext(noteContext);

  const handleClickDeleteNote = () => {
    deleteNote(item._id);
  };

  return (
    <div className=" border rounded border-indigo-600  w-96 h-52 flex flex-col justify-around items-center">
      <h2 className=" font-bold text-xl italic">{item.title}</h2>
      <p>{item.description}</p>
      <button
        className=" bg-red-600 rounded p-1 w-20 hover:bg-red-700 transition-all text-white"
        onClick={handleClickDeleteNote}>
        Sil
      </button>
    </div>
  );
};

export default NoteShow;
