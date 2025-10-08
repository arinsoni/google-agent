"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100">
      {/* Top bar */}
      <div className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-6 py-3">
          <img src="/denave-logo.png" alt="Denave" className="h-7 w-auto md:h-8" />
          <div className="h-6 w-px bg-gray-200" />
          <div className="text-sm text-gray-600">Assistant</div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-6">
        <ChatKitPanel
          theme={"light"}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={() => {}}
        />
      </div>
    </main>
  );
}
