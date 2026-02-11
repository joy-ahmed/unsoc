import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const icon =
          route.name === "index"
            ? "home"
            : route.name === "profile"
              ? "person"
              : "settings";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <Ionicons
              name={icon}
              size={24}
              color={isFocused ? "#2563eb" : "#9ca3af"}
            />
            <Text style={{ color: isFocused ? "#2563eb" : "#9ca3af" }}>
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#e5e7eb",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});
