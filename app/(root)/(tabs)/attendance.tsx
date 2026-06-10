//app\(root)\(tabs)\index.tsx
import { useUsers } from "@/hooks/useUsers";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function AttendancePage() {
  const { data: users } = useUsers();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="bg-red"> My view Leavess </Text>
      <Text>Total Users: {users?.count}</Text>
    </SafeAreaView>
  );
}
