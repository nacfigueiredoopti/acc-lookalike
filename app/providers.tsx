"use client";

import { useEffect, useMemo, useState } from "react";
import optimizelySDK from "@optimizely/optimizely-sdk";
import { OptimizelyProvider } from "@optimizely/react-sdk";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);

  // Stable anonymous user for bucketing
  useEffect(() => {
    const k = "opt_user_id";
    const existing =
      typeof window !== "undefined" ? localStorage.getItem(k) : null;
    if (existing) setUserId(existing);
    else {
      const id = "anon_" + Math.random().toString(36).slice(2);
      localStorage.setItem(k, id);
      setUserId(id);
    }
  }, []);

  const optimizely = useMemo(() => {
    const sdkKey = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;
    if (!sdkKey) {
      console.warn("Missing NEXT_PUBLIC_OPTIMIZELY_SDK_KEY");
      return null;
    }
    return optimizelySDK.createInstance({ sdkKey });
  }, []);

  if (!optimizely || !userId) return <>{children}</>;

  return (
    <OptimizelyProvider optimizely={optimizely} user={{ id: userId }}>
      {children}
    </OptimizelyProvider>
  );
}
