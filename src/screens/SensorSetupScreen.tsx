// src/screens/SensorSetupScreen.tsx
import React, { useState } from "react";

export const SensorSetupScreen: React.FC = () => {
  const [status, setStatus] = useState<
    "disconnected" | "connecting" | "connected"
  >("disconnected");

  const handleConnect = () => {
    setStatus("connecting");
    // TODO: call WebBluetooth / WebSocket / API to connect to ESP32
    setTimeout(() => setStatus("connected"), 1500);
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Connect your device</h2>
      <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
        Make sure your ESP32 board is powered and in range.
      </p>
      <button onClick={handleConnect} disabled={status === "connecting"}>
        {status === "disconnected" && "Connect to ESP32"}
        {status === "connecting" && "Connecting..."}
        {status === "connected" && "Connected ✓"}
      </button>

      <ul style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        <li>ECG (AD8232)</li>
        <li>Heart rate / SpO₂ (MAX30102)</li>
        <li>Motion (MPU6050)</li>
      </ul>
    </div>
  );
};
