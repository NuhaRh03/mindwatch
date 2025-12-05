// src/App.tsx
import React from "react";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { DailyCheckInScreen } from "./screens/DailyCheckInScreen";
import { EpisodeDetailScreen } from "./screens/EpisodeDetailScreen";
import { HistoryScreen } from "./screens/HistoryScreen";
import { LiveDataScreen } from "./screens/LiveDataScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { PredictionScreen } from "./screens/PredictionScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { SensorSetupScreen } from "./screens/SensorSetupScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          {/* Protected screens */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/prediction" />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/sensor-setup" element={<SensorSetupScreen />} />
              <Route path="/daily-checkin" element={<DailyCheckInScreen />} />
              <Route path="/live-data" element={<LiveDataScreen />} />
              <Route path="/prediction" element={<PredictionScreen />} />
              <Route path="/history" element={<HistoryScreen />} />
              <Route path="/history/:id" element={<EpisodeDetailScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Layout>
    </Router>
  );
};
