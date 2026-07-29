import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./context/ThemeContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <ThemeProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      </ThemeProvider>
    </BrowserRouter>

);

