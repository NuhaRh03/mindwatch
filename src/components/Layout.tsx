// src/components/Layout.tsx
import React, { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { to: "/prediction", label: "Prediction" },
    { to: "/daily-checkin", label: "Check-in" },
    { to: "/live-data", label: "Live data" },
    { to: "/history", label: "History" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
        background: "#f5f5f7",
      }}
    >
      <header
        style={{ padding: "1rem 2rem", background: "#111827", color: "white" }}
      >
        <h1 style={{ margin: 0, fontSize: "1.25rem" }}>Migraine Predictor</h1>
      </header>

      <main style={{ padding: "1.5rem 2rem" }}>{children}</main>

      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          padding: "0.75rem 1rem",
          background: "#111827",
          color: "white",
        }}
      >
        {navItems.map((item) => {
          const active = location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              style={{
                color: active ? "#22c55e" : "#e5e7eb",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
