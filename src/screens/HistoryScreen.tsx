// src/screens/HistoryScreen.tsx
import React from "react";
import { Link } from "react-router-dom";

export const HistoryScreen: React.FC = () => {
  const fakeHistory = [
    { id: "2025-12-01", date: "2025-12-01", risk: "Low", hadMigraine: false },
    { id: "2025-12-02", date: "2025-12-02", risk: "High", hadMigraine: true },
  ];

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>History</h2>
      <ul>
        {fakeHistory.map((d) => (
          <li key={d.id}>
            <Link to={`/history/${d.id}`}>
              {d.date} – predicted: {d.risk} – episode:{" "}
              {d.hadMigraine ? "Yes" : "No"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
