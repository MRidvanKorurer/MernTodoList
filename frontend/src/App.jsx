import { useContext, useEffect } from "react";
import "./App.css";
import NotePage from "./pages/NotePage";
import noteContext from "./context/noteContext";

function App() {
  const { getAllNote } = useContext(noteContext);

  useEffect(() => {
    getAllNote();
  }, []);
  return <NotePage />;
}

export default App;
