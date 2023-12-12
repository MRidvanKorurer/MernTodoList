import React, { useEffect, useState } from "react";
import axios from "axios";

const noteContext = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  async function getAllNote() {
    try {
      const response = await axios.get("http://localhost:3000/api/note");
      console.log(response);
      setData(response.data.notes);
    } catch (error) {
      console.error(error);
    }
  }

  const createNote = async (title, desc) => {
    try {
      const response = await axios.post("http://localhost:3000/api/note", {
        title: title,
        description: desc,
      });
      setData(response.data.notes);
      alert("Yeni Not Eklendi!");
      getAllNote();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      if (window.confirm("Notu silmek istediğinize emin misiniz?")) {
        await axios.delete(`http://localhost:3000/api/note/${id}`);
        getAllNote();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNote();
  }, []);

  const sharedValuesAndMethods = {
    data,
    getAllNote,
    createNote,
    deleteNote,
  };

  return (
    <noteContext.Provider value={sharedValuesAndMethods}>{children}</noteContext.Provider>
  );
};

export { Provider };
export default noteContext;
