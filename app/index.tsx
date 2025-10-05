import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "@/components/SignInForm";
import { SignOutButton } from "@/components/SignOutButton";
import { View, Text, ActivityIndicator } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white/80 backdrop-blur-sm h-16 flex-row justify-between items-center border-b shadow-sm px-4">
        <Text className="text-xl font-semibold text-blue-600">VibraCode</Text>
        <SignOutButton />
      </View>
      <View className="flex-1 items-center justify-center p-8">
        <View className="w-full max-w-md">
          <Content />
        </View>
      </View>
    </View>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <View className="flex justify-center items-center">
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <View className="flex flex-col gap-6">
      <View className="text-center">
        <Text className="text-5xl font-bold text-blue-600 mb-4">Welcome to VibraCode</Text>
        <Authenticated>
          <Text className="text-xl text-gray-600">
            Welcome back, {loggedInUser?.email ?? "friend"}!
          </Text>
        </Authenticated>
        <Unauthenticated>
          <Text className="text-xl text-gray-600">Sign in to get started</Text>
        </Unauthenticated>
      </View>

      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </View>
  );
}
