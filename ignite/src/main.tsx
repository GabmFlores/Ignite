import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { LoginModalProvider } from "./components/LoginModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginModalProvider>
        <App />
      </LoginModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
