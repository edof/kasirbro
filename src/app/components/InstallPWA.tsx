"use client";

import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("App is already installed");
      return;
    }

    const handler = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Update UI to notify the user they can add to home screen
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if the app is installable
    if ("getInstalledRelatedApps" in navigator) {
      // @ts-ignore
      navigator.getInstalledRelatedApps().then((relatedApps: any[]) => {
        if (relatedApps.length === 0) {
          setShowInstallButton(true);
        }
      });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);

    // Hide the install button
    setShowInstallButton(false);

    // Optionally, send analytics event with outcome
    console.log(`User response to the install prompt: ${outcome}`);
  };

  if (!showInstallButton) return null;

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Download />}
      onClick={handleInstallClick}
      sx={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        zIndex: 1000,
        boxShadow: 3,
      }}>
      Install Aplikasi
    </Button>
  );
}
