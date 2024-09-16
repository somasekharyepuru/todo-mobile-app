import { useApi } from "@/api";
import { useSnackbar } from "@/components/shared/snackbar";
import { setUserSession } from "@/utils/User";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  Button,
  Text,
  TextInput,
  TouchableRipple,
  useTheme,
} from "react-native-paper";

export default function Login() {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const [login, loginStatus] = useApi.useLoginMutation();

  const handleLogin = () => {
    login({
      user: {
        username,
        password,
      },
    })
      .unwrap()
      .then((data) => {
        const {
          first_name,
          last_name,
          email,
          phone,
          accessToken,
          refreshToken,
          id,
        } = data.login;
        setUserSession({
          first_name,
          last_name,
          email,
          phone,
          accessToken,
          refreshToken,
          userId: id,
        });
        showSnackbar("Logged in successfully", "success");
        router.replace("/(tabs)");
      })
      .catch((error) => {
        showSnackbar("Invalid username or password", "error");
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="always"
      >
        <View className="flex-1 justify-center items-center p-5">
          <Text variant="headlineMedium" className="font-bold mb-5">
            VDMS
          </Text>
          <View className="w-full mb-5">
            <TextInput
              mode="outlined"
              label="Username"
              value={username}
              onChangeText={setUsername}
              className="mb-2.5"
              keyboardType="email-address"
            />
            <TextInput
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
          </View>
          <Button
            mode="contained"
            onPress={handleLogin}
            className="w-full mb-5"
            loading={loginStatus.isLoading}
          >
            Log In
          </Button>
          <TouchableRipple
            onPress={() => {
              router.push("/(auth)/forgot-password");
            }}
            className="mb-5"
          >
            <Text style={{ color: theme.colors.primary }}>
              Forgot Password?
            </Text>
          </TouchableRipple>
          <View className="flex-row">
            <Text>Don't have an account? </Text>
            <TouchableRipple
              onPress={() => {
                router.push("/(auth)/register");
              }}
            >
              <Text
                style={{ color: theme.colors.primary }}
                className="font-bold"
              >
                Sign Up
              </Text>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
