import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import "leaflet/dist/leaflet.css";
import { SocketProvider } from "./context/SocketContext.tsx";

export const authService = "https://aomato-auth.onrender.com";
export const restaurantService = "https://aomato-restaurant.onrender.com";
export const utilsService = "https://aomato-utils.onrender.com";
export const realtimeService = "https://aomato-realtime.onrender.com";
export const riderService = "https://aomato-rider.onrender.com";
export const adminService = "https://aomato-admin.onrender.com";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="596268404302-kktqpqnl8t8r3fc33rb4clslfj8t3msc.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
