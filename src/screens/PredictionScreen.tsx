// src/screens/PredictionScreen.tsx
import React from "react";

export const PredictionScreen: React.FC = () => {
  // TODO: get this from ML model
  const prediction = {
    riskLevel: "High", // Low | Medium | High
    riskScore: 0.82, // 0–1
    timeWindow: "next 24 hours",
    keyFactors: [
      "High stress level today",
      "Short sleep last night",
      "Recent increase in heart rate variability",
    ],
    suggestions: [
      "Take prescribed preventive medication if recommended by your doctor.",
      "Reduce screen time and bright light exposure.",
      "Hydrate and avoid known trigger foods.",
    ],
  };

  const riskColor =
    prediction.riskLevel === "High"
      ? "#ef4444"
      : prediction.riskLevel === "Medium"
        ? "#f97316"
        : "#22c55e";

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Today&apos;s migraine risk</h2>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "0.75rem",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem" }}>
          Risk in the {prediction.timeWindow}:
        </p>
        <h3 style={{ margin: "0.5rem 0", color: riskColor }}>
          {prediction.riskLevel} ({Math.round(prediction.riskScore * 100)}%)
        </h3>
      </div>

      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "0.75rem",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Why?</h4>
        <ul>
          {prediction.keyFactors.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "0.75rem",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <h4 style={{ marginTop: 0 }}>What can you do?</h4>
        <ul>
          {prediction.suggestions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
