import { useUsers } from "@/hooks/useUsers";
import { useAuthStore, User } from "@/store/authStore";
import { Ionicons } from "@expo/vector-icons";
import React /* useState */ from "react";
import { FlatList, Text, View } from "react-native";
/*   ActivityIndicator,
  
  TouchableOpacity,
  View, */
import { SafeAreaView } from "react-native-safe-area-context";

const AdminHome = () => {
  const { data: users, isLoading, error } = useUsers();
  const { first_name, last_name } = useAuthStore((state) => state.user as User);
  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Error loading users</Text>
      </SafeAreaView>
    );
  }
  console.log(users.results[0]);
  return (
    <SafeAreaView className="flex flex-1  mb-10">
      <FlatList
        data={users.results}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* {Headeer} */}
            <View className="flex-row items-center justify-between px-5 pt-4 pb-5 ">
              <Text className="text-4xl font-bold text-primary">MedAura</Text>
              <View className="items-end">
                <Text className="">Welcome back</Text>
                <Text className="text-gray-900 text-base font-bold">
                  {first_name ?? "User"} {last_name}
                </Text>
              </View>
              <Ionicons name="notifications-sharp" size={20} color="black" />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-200">
            <Text>{item.first_name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default AdminHome;
