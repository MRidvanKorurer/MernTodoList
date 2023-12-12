import React, { useContext } from "react";
import noteContext from "../../context/noteContext";
import NoteShow from "./NoteShow";

const NoteList = () => {
  const { data } = useContext(noteContext);
  return (
    <div className=" flex flex-wrap justify-center items-center gap-10 mt-8">
      {data.map((item) => {
        return <NoteShow key={item._id} item={item} />;
      })}
    </div>
  );
};

export default NoteList;
