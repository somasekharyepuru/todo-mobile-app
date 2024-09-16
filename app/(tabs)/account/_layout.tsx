import React from "react";
import { Stack } from "expo-router";

export default function AccountLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ presentation: "modal" }} />
      <Stack.Screen name="help" options={{ presentation: "modal" }} />
    </Stack>
  );
}
