import React, { createContext, useState, useContext, ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface SnackbarContextType {
  showSnackbar: (
    message: string,
    type?: "default" | "success" | "error"
  ) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"default" | "success" | "error">("default");

  const showSnackbar = (
    msg: string,
    snackType: "default" | "success" | "error" = "default"
  ) => {
    setMessage(msg);
    setType(snackType);
    setVisible(true);
    setTimeout(hideSnackbar, 3000);
  };

  const hideSnackbar = () => setVisible(false);

  const value: SnackbarContextType = {
    showSnackbar,
  };

  const getSnackbarStyle = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-800";
    }
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {visible && (
        <StyledView
          className={`absolute bottom-4 left-4 right-4 ${getSnackbarStyle()} rounded-lg shadow-lg`}
        >
          <StyledView className="flex-row items-center justify-between p-4">
            <StyledText className="text-white flex-1">{message}</StyledText>
            <StyledTouchableOpacity onPress={hideSnackbar} className="ml-4">
              <StyledText className="text-white font-bold">Dismiss</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
