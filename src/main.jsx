import { createRoot } from "react-dom/client";

// Custom CSS
import "./index.css";

// Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <App />
    // </StrictMode>,
);
