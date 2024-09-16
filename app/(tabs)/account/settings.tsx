import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, useTheme } from "react-native-paper";

export default function SettingsScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Settings</Text>
      </View>
    </SafeAreaView>
  );
}
