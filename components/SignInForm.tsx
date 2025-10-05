import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("password", password);
      formData.set("flow", flow);
      
      await signIn("password", formData);
    } catch (error) {
      let errorMessage = "";
      if (error instanceof Error && error.message.includes("Invalid password")) {
        errorMessage = "Invalid password. Please try again.";
      } else {
        errorMessage = flow === "signIn" 
          ? "Could not sign in, did you mean to sign up?"
          : "Could not sign up, did you mean to sign in?";
      }
      Alert.alert("Error", errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    setSubmitting(true);
    try {
      await signIn("anonymous");
    } catch (error) {
      Alert.alert("Error", "Could not sign in anonymously");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="w-full p-4">
      <View className="mb-4">
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-3 bg-white"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-3 mb-3"
          onPress={handleSubmit}
          disabled={submitting}
        >
          <Text className="text-white text-center font-semibold">
            {flow === "signIn" ? "Sign in" : "Sign up"}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
          className="mb-4"
        >
          <Text className="text-center text-gray-600">
            {flow === "signIn" ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-gray-500">or</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <TouchableOpacity
        className="bg-gray-500 rounded-lg p-3"
        onPress={handleAnonymousSignIn}
        disabled={submitting}
      >
        <Text className="text-white text-center font-semibold">
          Sign in anonymously
        </Text>
      </TouchableOpacity>
    </View>
  );
}
