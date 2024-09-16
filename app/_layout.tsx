import { SnackbarProvider } from "@/components/shared/snackbar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { store } from "@/redux/store";
import colors from "@/utils/colors";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// function UserSessionLoader({ children }: { children: React.ReactNode }) {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(loadUserSession());
//   }, [dispatch]);

//   return <>{children}</>;
// }

// function AuthWrapper({ children }: { children: React.ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   const router = useRouter();
//   const segments = useSegments();
//   const user = useAppSelector((state) => state.user);

//   const checkAuthStatus = useCallback(() => {
//     const { accessToken } = user;
//     const isLoggedIn = !!accessToken;
//     setIsAuthenticated(isLoggedIn);
//     return isLoggedIn;
//   }, [user]);

//   useEffect(() => {
//     checkAuthStatus();
//   }, [checkAuthStatus]);

//   useEffect(() => {
//     if (isAuthenticated === false) {
//       router.replace("/(auth)/login");
//     } else if (isAuthenticated === true) {
//       router.replace("/");
//     }
//   }, [isAuthenticated, router]);

//   return <>{children}</>;
// }

export default function RootLayout() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Promise.all([]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsMounted(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded && isMounted) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, isMounted]);

  if (!fontsLoaded || !isMounted) {
    return null; // This will keep the splash screen visible until everything is ready
  }

  // Custom theme
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...colors,
    },
  };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SnackbarProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SnackbarProvider>
      </PaperProvider>
    </Provider>
  );
}
