import { useAppSelector } from "@/redux/hooks";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Button, Divider, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const theme = useTheme();
  const router = useRouter();
  const { id, first_name, last_name, email } = useAppSelector(
    (state) => state.user
  );
  const handleLogout = async () => {
    router.replace("/(auth)/login");
  };

  const name = useMemo(
    () => `${first_name} ${last_name}`,
    [first_name, last_name]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView className="flex-1">
        <View className="items-center mt-8 mb-6">
          <Avatar.Text
            size={80}
            label={name.charAt(0).toUpperCase()}
            // backgroundColor={theme.colors.primary}
          />
          <Text className="mt-4 text-2xl font-bold">{name}</Text>
          <Text className="mt-1 text-gray-600">{email}</Text>
        </View>

        <Divider className="my-4" />

        <View className="px-4">
          <Link href="/(tabs)/account/settings" asChild>
            <Button
              mode="outlined"
              icon={({ size, color }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              )}
              className="mb-4"
            >
              Settings
            </Button>
          </Link>

          <Link href="/(tabs)/account/help" asChild>
            <Button
              mode="outlined"
              icon={({ size, color }) => (
                <Ionicons
                  name="help-circle-outline"
                  size={size}
                  color={color}
                />
              )}
              className="mb-4"
            >
              Help & Support
            </Button>
          </Link>

          <Button
            mode="contained"
            icon={({ size, color }) => (
              <Ionicons name="log-out-outline" size={size} color={color} />
            )}
            onPress={handleLogout}
            className="mt-4"
          >
            Log out
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
