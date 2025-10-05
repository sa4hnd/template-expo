import "../global.css";
import { Stack } from "expo-router";
import { ConvexProvider } from "@/lib/convex-provider";

export default function RootLayout() {
  return (
    <ConvexProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ConvexProvider>
  );
}
