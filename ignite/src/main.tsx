import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { LoginModalProvider } from "./components/LoginModalContext.tsx";
import { AuthProvider } from "./store/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginModalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LoginModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
