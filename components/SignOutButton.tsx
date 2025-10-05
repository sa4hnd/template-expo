import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { TouchableOpacity, Text } from "react-native";

export function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <TouchableOpacity
      className="px-4 py-2 rounded bg-white border border-gray-200"
      onPress={() => signOut()}
    >
      <Text className="text-gray-700 font-semibold">Sign out</Text>
    </TouchableOpacity>
  );
}
