import React, { useState } from "react";
import { Animated, SafeAreaView, ViewStyle } from "react-native";
import { AnimatedFAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface AnimatedFABComponentProps {
  animatedValue?: Animated.Value;
  visible?: boolean;
  extended?: boolean;
  label?: string;
  animateFrom?: "right" | "left";
  style?: ViewStyle;
  iconMode?: "static" | "dynamic";
  onPress?: () => void;
}

const AnimatedFABComponent: React.FC<AnimatedFABComponentProps> = ({
  visible = true,
  animateFrom = "right",
  style,
  iconMode = "static",
  onPress,
}) => {
  const theme = useTheme();
  const [isExtended, setIsExtended] = useState(false);
  const fabStyle = { [animateFrom]: 40 };
  const { bottom } = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1">
      <AnimatedFAB
        icon={"plus"}
        label={"Add Item"}
        extended={isExtended}
        onPress={onPress}
        visible={visible}
        animateFrom={animateFrom}
        iconMode={iconMode}
        theme={{
          colors: {
            primary: theme.colors.primary,
          },
        }}
        style={[
          {
            bottom: bottom + 70,
            right: 16,
            position: "absolute",
          },
          style,
          fabStyle,
        ]}
      />
    </SafeAreaView>
  );
};

export default AnimatedFABComponent;
