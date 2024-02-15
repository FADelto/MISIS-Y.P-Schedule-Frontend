import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from './services/AuthContext.jsx';
import DefaultRouter from "./services/DefaultRouter";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DefaultRouter />
    </AuthProvider>
  </React.StrictMode>
);
