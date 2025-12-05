// src/screens/LiveDataScreen.tsx
import React from "react";

export const LiveDataScreen: React.FC = () => {
  // TODO: replace with live data from ESP32
  const fake = {
    heartRate: 72,
    spo2: 98,
    accel: { x: 0.01, y: -0.02, z: 9.8 },
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Live data</h2>
      <div style={{ marginTop: "1rem" }}>
        <p>Heart rate: {fake.heartRate} bpm</p>
        <p>SpO₂: {fake.spo2} %</p>
        <p>
          Accel: x={fake.accel.x.toFixed(2)}, y={fake.accel.y.toFixed(2)}, z=
          {fake.accel.z.toFixed(2)} m/s²
        </p>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#6b7280" }}>
        Later: here you can stream ECG / PPG / IMU data from your ESP32 in real
        time.
      </p>
    </div>
  );
};
