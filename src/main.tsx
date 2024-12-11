import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
// import {global.css} from "./global.css";
import "./global.css";
import Preview from "./pages/preview/Preview";
const Router = () => {
  return <BrowserRouter></BrowserRouter>;
};

export default Router;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
