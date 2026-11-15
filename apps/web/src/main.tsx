import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./features/authentication/Login";
import Register from "./features/authentication/Register";

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [username, setUsername] = useState(
    () => sessionStorage.getItem("username") ?? "",
  );

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath: string) => {
    window.history.pushState(null, "", nextPath);
    setPath(nextPath);
  };

  if (path === "/register") {
    return <Register onLogin={() => navigate("/login")} />;
  }

  if (!username) {
    return (
      <Login
        onRegister={() => navigate("/register")}
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
