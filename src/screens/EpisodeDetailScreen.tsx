// src/screens/EpisodeDetailScreen.tsx
import React from "react";
import { useParams } from "react-router-dom";

export const EpisodeDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: load details by id
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", paddingBottom: "4rem" }}>
      <h2>Episode details – {id}</h2>
      <p>
        Here you can show symptoms, triggers, prediction vs real outcome, notes,
        etc.
      </p>
    </div>
  );
};
