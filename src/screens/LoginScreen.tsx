// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginScreen: React.FC = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: auth logic
    nav("/prediction");
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Log in</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}
      >
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Log in
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        New here? <Link to="/register">Create account</Link>
      </p>
    </div>
  );
};
