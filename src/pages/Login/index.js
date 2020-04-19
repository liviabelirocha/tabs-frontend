import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container, Content, Form, Button, StyledLink } from "./styles";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = { username, password };
      const response = await api.post("login", data);

      localStorage.setItem("token", response.data.token);

      history.push("/admin/submit");
    } catch (err) {
      alert("Login failed. Try again.");
    }
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleLogin}>
          <StyledLink to="/gear">
            <FiArrowLeft size={16} color="#3d2b57" />
            Go back to website
          </StyledLink>
          <h1>Login</h1>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
