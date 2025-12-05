// src/screens/OnboardingScreen.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const OnboardingScreen: React.FC = () => {
  const nav = useNavigate();
  const [profile, setProfile] = useState({
    age: "",
    sex: "",
    weight: "",
    migraineType: "",
    typicalTriggers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProfile((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save profile
    nav("/sensor-setup");
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Your migraine profile</h2>
      <form
        onSubmit={handleNext}
        style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}
      >
        <input
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
        />
        <select name="sex" value={profile.sex} onChange={handleChange}>
          <option value="">Sex</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <input
          name="weight"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={handleChange}
        />
        <input
          name="migraineType"
          placeholder="Migraine type (with aura, chronic, etc.)"
          value={profile.migraineType}
          onChange={handleChange}
        />
        <textarea
          name="typicalTriggers"
          placeholder="Common triggers (stress, lack of sleep, screen, food...)"
          value={profile.typicalTriggers}
          onChange={handleChange}
        />
        <button type="submit">Continue to sensor setup</button>
      </form>
    </div>
  );
};
