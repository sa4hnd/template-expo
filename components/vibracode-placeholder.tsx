import { View } from "react-native";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native";

export default function VibracodePlaceholder() {
  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <View className="items-center space-y-6 p-8">
        <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center">
          <Text className="text-2xl">🤖</Text>
        </View>
        
        <View className="items-center space-y-3">
          <Text className="text-2xl font-bold text-gray-800 text-center">
            AI is building your app
          </Text>
          <Text className="text-base text-gray-600 text-center max-w-sm">
            VibraCode is generating your React Native application. You might see some errors during development - that's normal!
          </Text>
          <Text className="text-sm text-blue-600 text-center max-w-sm font-medium">
            If you want database, please click on database and follow instructions
          </Text>
        </View>
        
        <View className="flex-row items-center space-x-2">
          <ActivityIndicator size="small" color="#3B82F6" />
          <Text className="text-sm text-gray-500">Building...</Text>
        </View>
      </View>
    </View>
  );
}
