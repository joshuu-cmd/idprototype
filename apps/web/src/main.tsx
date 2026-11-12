import { createRoot } from "react-dom/client";
import "./index.css"
import Dashboard from "./pages/Dashboard";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

createRoot(root).render(<Dashboard />);
