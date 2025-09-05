import { data, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";
import NotificationsPage from "./pages/NotificationsPage";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";

export default function App() {
  const {
    data: authData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      } catch (err) {
        console.log("Error in getAuthUser:", error);
        return null;
      }
    },
    retry: false,
  });
  const authUser = authData?.user;

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to="/" />}
        ></Route>

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>

        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/call"
          element={authUser ? <CallPage /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/notifications"
          element={authUser ? <NotificationsPage /> : <Navigate to="/login" />}
        ></Route>

        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}
