//app\(root)\(tabs)\index.tsx
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LeavesPage() {
  console.log("HOME PAGE RENDERED");
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="bg-red"> My view Leavess </Text>
    </SafeAreaView>
  );
}
