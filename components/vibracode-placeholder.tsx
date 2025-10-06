import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";

export default function VibracodePlaceholder() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      {/* Background Image */}
      <Image
        source={require('../assets/images/vibracode-bg.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
        contentFit="cover"
      />
      
      {/* Dark overlay for better text readability */}
      <BlurView
        intensity={40}
        tint="dark"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      
      {/* Content */}
      <View className="items-center space-y-8 p-8 z-10">
        {/* Logo */}
        <View className="items-center space-y-4">
          <Image
            source={require('../assets/images/icon.png')}
            style={{ 
              width: 96, 
              height: 96,
              borderRadius: 20,
            }}
            contentFit="cover"
          />
          <Text className="text-3xl font-bold text-white text-center">
            VibraCode
          </Text>
        </View>
        
        {/* Main content */}
        <View className="items-center space-y-4 max-w-sm">
          <Text className="text-xl font-semibold text-white text-center">
            AI is building your app
          </Text>
          <Text className="text-base text-white/80 text-center leading-6">
            VibraCode is cooking up something magical for you! If you see an error, screenshot or copy it to AI for help.
          </Text>
          <Text className="text-sm text-blue-300 text-center font-medium">
            If you want database, please click on database and follow instructions
          </Text>
        </View>
        
        {/* Loading indicator */}
        <View className="flex-row items-center space-x-3">
          <ActivityIndicator size="small" color="#60A5FA" />
          <Text className="text-sm text-white/70">
            Building...
          </Text>
        </View>
      </View>
    </View>
  );
}