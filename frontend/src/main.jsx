import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { Provider } from "./context/noteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider>
    <MainLayout>
      <App />
    </MainLayout>
  </Provider>
  // </React.StrictMode>
);
