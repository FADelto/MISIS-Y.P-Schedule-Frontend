import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { DefaultRouter } from "./components/app/App";
import { AuthProvider } from './services/AuthContext.jsx'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DefaultRouter />
    </AuthProvider>
  </React.StrictMode>
);
