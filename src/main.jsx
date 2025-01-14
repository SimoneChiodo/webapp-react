import { createRoot } from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS
import "./assets/index.css";

// Components
import App from "./App.jsx";

// Bootstrap JS
import * as bootstrap from "bootstrap";

createRoot(document.getElementById("root")).render(<App />);
