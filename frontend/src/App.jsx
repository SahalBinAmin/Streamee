import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";
import NotificationsPage from "./pages/NotificationsPage";

export default function App() {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/onboarding" element={<OnboardingPage />}></Route>
        <Route path="/call" element={<CallPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/notifications" element={<NotificationsPage />}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
    </div>
  );
}
