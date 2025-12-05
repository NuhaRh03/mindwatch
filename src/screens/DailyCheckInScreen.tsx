// src/screens/DailyCheckInScreen.tsx
import React, { useState } from "react";

export const DailyCheckInScreen: React.FC = () => {
  const [state, setState] = useState({
    painLevel: 0,
    sleepHours: "",
    stressLevel: 0,
    aura: false,
    nausea: false,
    lightSensitivity: false,
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to backend / prediction service
    alert("Daily check-in saved.");
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Daily check-in</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}
      >
        <label>
          Pain level (0–10)
          <input
            type="number"
            min={0}
            max={10}
            value={state.painLevel}
            onChange={(e) =>
              setState((s) => ({ ...s, painLevel: Number(e.target.value) }))
            }
          />
        </label>

        <label>
          Sleep hours (last night)
          <input
            type="number"
            min={0}
            max={24}
            value={state.sleepHours}
            onChange={(e) =>
              setState((s) => ({ ...s, sleepHours: e.target.value }))
            }
          />
        </label>

        <label>
          Stress level (0–10)
          <input
            type="number"
            min={0}
            max={10}
            value={state.stressLevel}
            onChange={(e) =>
              setState((s) => ({ ...s, stressLevel: Number(e.target.value) }))
            }
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={state.aura}
            onChange={(e) =>
              setState((s) => ({ ...s, aura: e.target.checked }))
            }
          />
          Visual aura
        </label>

        <label>
          <input
            type="checkbox"
            checked={state.nausea}
            onChange={(e) =>
              setState((s) => ({ ...s, nausea: e.target.checked }))
            }
          />
          Nausea
        </label>

        <label>
          <input
            type="checkbox"
            checked={state.lightSensitivity}
            onChange={(e) =>
              setState((s) => ({ ...s, lightSensitivity: e.target.checked }))
            }
          />
          Light sensitivity
        </label>

        <textarea
          placeholder="Anything special today (food, stress event, screen, etc.)"
          value={state.notes}
          onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
        />

        <button type="submit">Save check-in</button>
      </form>
    </div>
  );
};
