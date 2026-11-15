import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./features/authentication/Login";
import Register from "./features/authentication/Register";

function App() {
  const [username, setUsername] = useState(
    () => sessionStorage.getItem("username") ?? "",
  );

  if (window.location.pathname === "/register") {
    return <Register />;
  }

  if (!username) {
    return (
      <Login
        onLogin={(name) => {
          sessionStorage.setItem("username", name);
          setUsername(name);
        }}
      />
    );
  }

  return (
    <Dashboard
      name={username}
      onLogout={() => {
        sessionStorage.removeItem("username");
        setUsername("");
      }}
    />
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");
createRoot(root).render(<App />);
