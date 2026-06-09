import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomePage() {
  console.log("HOME PAGE RENDERED");
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="bg-red"> My view sdssdfsdfgfg </Text>
    </SafeAreaView>
  );
}
