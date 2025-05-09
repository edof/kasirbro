"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPWA({
  children,
}: {
  children: (props: { install: () => void }) => React.ReactNode;
}) {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Handler for beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault();
      console.log("beforeinstallprompt event fired");
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    // Check installation status
    const checkInstalledStatus = () => {
      // Method 1: Check display mode
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      // Method 2: Check installed apps (if supported)
      let isInstalled = false;
      if ("getInstalledRelatedApps" in navigator) {
        // @ts-ignore
        navigator.getInstalledRelatedApps().then((apps) => {
          isInstalled = apps.length > 0;
          console.log("Installed apps:", apps);
        });
      }

      // Method 3: Check localStorage flag (custom implementation)
      const wasInstalled = localStorage.getItem("pwaInstalled") === "true";

      // Update installability state
      setIsInstallable(!isStandalone && !wasInstalled);
    };

    // Add event listeners
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      localStorage.setItem("pwaInstalled", "true");
      setIsInstallable(false);
    });

    // Initial check
    checkInstalledStatus();

    // Periodic checks (every 5 seconds)
    const interval = setInterval(checkInstalledStatus, 5000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearInterval(interval);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) {
      console.error("No install prompt available");
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("User accepted install");
        localStorage.setItem("pwaInstalled", "true");
        setIsInstallable(false);
      } else {
        console.log("User dismissed install");
      }
    } catch (error) {
      console.error("Error during install:", error);
    }
  };

  // Debug info (can be removed in production)
  // useEffect(() => {
  //   console.log('Installability state:', {
  //     isInstallable,
  //     deferredPrompt: !!deferredPrompt,
  //     displayMode: window.matchMedia('(display-mode: standalone)').matches
  //   });
  // }, [isInstallable, deferredPrompt]);

  // if (!isInstallable) return null;

  return <>{children({ install })}</>;
}
