import { Tabs } from "expo-router";

export default function TabsLayout() {
  console.log("TabsLayout");
  return (
    <Tabs
      screenOptions={{ headerShown: true, tabBarActiveTintColor: "#8b5cf6" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Tabs>
  );
}
