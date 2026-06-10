//app\(root)\(tabs)\_layout.tsx

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
/* import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs"; */
export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#8b5cf6" }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="leaves"
          options={{
            title: "Leaves",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="finger-print-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="attendance"
          options={{
            title: "Attendance",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* <NativeTabs backgroundColor={"#ffccffcc"}>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf="house.fill" drawable="ic_menu_manage" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="leaves">
          <Icon sf="plus.circle.fill" drawable="ic_media_ff" />{" "}
          <Label>Add Property</Label>{" "}
        </NativeTabs.Trigger>
      </NativeTabs> */}
    </>
  );
}
