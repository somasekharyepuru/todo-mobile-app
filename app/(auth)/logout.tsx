import { useAppDispatch } from "@/redux/hooks";
import { removeUserSession } from "@/redux/user/userSlice";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Logout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    router.replace("/(auth)/login");
    dispatch(removeUserSession());
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center"></SafeAreaView>
  );
}
