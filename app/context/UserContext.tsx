"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { apiFetch } from "../lib/apiFetch";
import { createSession, deleteSession, getSession } from "../lib/session";
import { Toast } from "../lib/toast";
import { storage } from "../lib/storage";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

type UserContextType = {
  user: Record<string, unknown> | null;
  loading: boolean;
  isAuthenticated: boolean;
  loginWithEmailPassword: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refetchUser: () => void;
  passwordlessLogin: (email: string) => Promise<boolean>;
  verifyOtp: (otpCode: string, email: string) => Promise<boolean>;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // always start false

  const fetchUserProfile = useCallback(async () => {
    try {
      setLoading(true);
      const userData = await apiFetch("/user/profile", { method: "GET" });
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
      setIsAuthenticated(false);
      storage.remove("accessToken"); // clean up bad token
    } finally {
      setLoading(false);
    }
  }, []);

  const loginWithEmailPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          Toast.default(errorData.message || "Login failed");
          return false;
        }
        const data = await res.json();
        await createSession(data.refreshToken);
        storage.set("accessToken", data.accessToken);
        await fetchUserProfile();
        Toast.default("Login Successful");
        return true;
      } catch (error) {
        console.error("Login failed:", error);
        Toast.error("An unexpected error occurred");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [fetchUserProfile],
  );

  const passwordlessLogin = useCallback(async (email: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/auth/passwordless-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        Toast.default(errorData.message || "Login failed");
        if (
          errorData.message ===
          "Kindly use the otp previously sent to your email"
        )
          return true;
        return false;
      }
      const data = await res.json();
      Toast.default(data.message || "Check your email");
      if (data.sent) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      Toast.error("An unexpected error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyOtp = useCallback(
    async (otpCode: string, email: string) => {
      setLoading(true);
      console.log(email, otpCode);
      try {
        const res = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp: otpCode }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          Toast.default(errorData.message || "Otp Verification failed");
          return false;
        }
        const data = await res.json();
        await createSession(data.refreshToken);
        storage.set("accessToken", data.accessToken);
        await fetchUserProfile();
        Toast.default("Login Successful");
        return true;
      } catch (error) {
        console.error("Otp Verification failed:", error);
        Toast.error("An unexpected error occurred");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [fetchUserProfile],
  );

  const logout = useCallback(async () => {
    const refreshToken = await getSession();
    console.log(refreshToken);
    await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });
    // if (!logout.ok) {
    //   const errorData = await logout.json();
    //   Toast.default(errorData.message || "Login failed");
    // }
    storage.remove("accessToken");
    await deleteSession();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const checkIsLogged = async () => {
      const token = storage.get("accessToken"); // ✅ fixed — uses localStorage
      if (token) {
        await fetchUserProfile();
      } else {
        setLoading(false); // no token, stop loading
      }
    };
    checkIsLogged();
  }, [fetchUserProfile]);

  const value = {
    user,
    loading,
    isAuthenticated,
    loginWithEmailPassword,
    logout,
    refetchUser: fetchUserProfile,
    passwordlessLogin,
    verifyOtp,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
