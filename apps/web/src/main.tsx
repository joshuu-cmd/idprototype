import { createRoot } from "react-dom/client";
import "./index.css"
import Dashboard from "./pages/Dashboard";
import Login from "./features/authentication/Login";
import { useState } from "react";


function App(){
    const [isAuthenticated, setIsAuthenticated] =
    useState(false);
    return isAuthenticated
    ? <Dashboard onLogout ={() =>setIsAuthenticated(false)} />
    : <Login onLogin={() => setIsAuthenticated(true)} />;
}
const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element")

createRoot(root).render(<App />);
