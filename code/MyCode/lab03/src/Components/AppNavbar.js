import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

export default function AppNavbar() {
  const { user, isLoggedIn, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [username, setUsername] = useState("Aaron");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <Navbar className="app-navbar" expand="md">
      <Container>
        <Navbar.Brand href="#home">Orchid Collection</Navbar.Brand>

        {isLoggedIn ? (
          <div className="d-flex align-items-center gap-3">
            <span className="welcome-text">Welcome, {user.username}</span>
            <Button variant="outline-secondary" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Form className="d-flex align-items-center gap-2" onSubmit={handleLogin}>
            <Form.Control
              size="sm"
              type="text"
              aria-label="Username"
              placeholder="Log in as (ex: Aaron)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit" size="sm" variant="success">
              Login
            </Button>
          </Form>
        )}

        <Button
          variant="outline-light"
          size="sm"
          className="theme-toggle ms-3"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </Container>
    </Navbar>
  );
}
