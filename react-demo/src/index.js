import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NameForm from "./NameForm";
import { ContactUsForm } from "./ContactUsForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactUsForm />
  </React.StrictMode>
);
