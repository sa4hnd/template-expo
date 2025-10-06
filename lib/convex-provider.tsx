import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

// Check if Convex is configured
const isConvexConfigured = process.env.EXPO_PUBLIC_CONVEX_URL;

// Only create Convex client if environment variable is available
const convex = isConvexConfigured 
  ? new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string)
  : null;

export function ConvexProvider({ children }: { children: ReactNode }) {
  // If Convex is not configured, just return children without Convex providers
  if (!isConvexConfigured || !convex) {
    return <>{children}</>;
  }

  return (
    <ConvexAuthProvider client={convex}>
      {children}
    </ConvexAuthProvider>
  );
}

// Export a hook to check if Convex is available
export function useConvexAvailable() {
  return !!isConvexConfigured;
}
