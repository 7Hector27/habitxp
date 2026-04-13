import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text className="text-3xl font-bold text-emerald-500 mb-2">
        HabitXP 🌿
      </Text>
      <Text className="text-sm text-gray-400 mb-6">Build better habits</Text>
      <TouchableOpacity className="bg-emerald-500 px-6 py-3 rounded-full">
        <Text className="text-white font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
