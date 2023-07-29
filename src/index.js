import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import the CSS

import App from "../src/App";
import Header from "../src/components/common/Header";
import Footer from "../src/components/common/Footer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
