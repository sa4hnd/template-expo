/**
 * VibraCode Template - Main App Component
 * 
 * This template works out of the box without any backend setup.
 * If you want to add Convex authentication, follow these steps:
 * 1. Run `npx convex dev` to initialize Convex
 * 2. Uncomment the Convex-related imports and code below
 * 3. The ConvexProvider in _layout.tsx will automatically handle the setup
 */

// Uncomment the following imports if you want to use Convex authentication:
// import { Authenticated, Unauthenticated, useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";
// import { SignInForm } from "@/components/SignInForm";
// import { SignOutButton } from "@/components/SignOutButton";
import VibracodePlaceholder from "@/components/vibracode-placeholder";

export default function Index() {
  return <VibracodePlaceholder />;
}

