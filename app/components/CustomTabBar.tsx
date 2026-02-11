import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={styles.tab}
                    >
                        <Ionicons
                            name={
                                route.name === "index"
                                    ? "home"
                                    : route.name === "profile"
                                        ? "person"
                                        : "settings"
                            }
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
    container: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        position: "absolute",
        bottom: 20,
        height: 70,
        backgroundColor: "#fff",
        borderTopWidth: 0.5,
        borderColor: "#e5e7eb",
    },
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
