// src/screens/SettingsScreen.tsx
import React, { useState } from "react";

export const SettingsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />
        Enable migraine risk notifications
      </label>
      <br />
      <br />
      <label>
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </label>
    </div>
  );
};
