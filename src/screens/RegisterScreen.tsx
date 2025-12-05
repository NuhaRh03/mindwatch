// src/screens/RegisterScreen.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterScreen: React.FC = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend
    nav("/onboarding");
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Create account</h2>
      <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
        Start tracking and predicting your migraine episodes.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}
      >
        <input
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
        />
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
        <input
          name="confirm"
          placeholder="Confirm password"
          type="password"
          value={form.confirm}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Continue
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
