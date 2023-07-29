import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
