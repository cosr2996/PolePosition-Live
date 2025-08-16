import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { F1Provider } from "./context/F1Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <F1Provider>
      <App />
    </F1Provider>
  </StrictMode>
);
