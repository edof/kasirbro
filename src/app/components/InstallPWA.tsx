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
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("App is already installed");
      return;
    }

    const handler = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if the app is installable
    if ("getInstalledRelatedApps" in navigator) {
      // @ts-ignore
      navigator.getInstalledRelatedApps().then((relatedApps: any[]) => {
        if (relatedApps.length === 0) {
          setIsInstallable(true);
        }
      });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstallable(false);
    }
  };

  if (!isInstallable) return null;

  return <>{children({ install })}</>;
}
