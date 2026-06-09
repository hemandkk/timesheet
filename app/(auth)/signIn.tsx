import { useLogin } from "@/hooks/useLogin";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  /*  ScrollView, */
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const onSignInPress = async () => {
    try {
      const result = await loginMutation.mutateAsync({
        email,
        password,
      });
      //console.log("SUCCESS:", result.data);

      router.replace("/");
    } catch (error) {
      console.log("ERROR:", error);
      /*  console.log("Response:", error?.response?.data);
      console.log("Status:", error?.response?.status);
      console.log("Headers:", error?.response?.headers); */
    }
  };

  const isLoading = loginMutation.isPending;
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={40}
      className="bg-primary text-white"
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 justify-center px-6 py-12">
        <View className="flex-row justify-center items-center gap-1 !mb-0 !pb-0">
          <Image
            source={require("../../assets/images/MedAura Logo.png")}
            className="w-20 h-14 mb-8"
            resizeMode="contain"
          />
          <Text className="text-3xl font-bold text-white mb-6">MedAura</Text>
        </View>
        <View className="justify-center items-center  mb-2 ">
          <Text className="flex-1 text-white/40">
            Track your time, anywhere
          </Text>
        </View>
        <View className="bg-white px-6 py-8 border rounded-xl mx-1">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back
          </Text>
          <Text className="text-gray-500 mb-8">Sign in to your account</Text>

          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
            placeholder="Email address"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View className="relative mb-6">
            <TextInput
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6"
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-3"
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
          {/*         {errors.fields.password && (
          <Text className="text-red-500 mb-4">
            {errors.fields.password.message}
          </Text>
        )}
 */}
          <TouchableOpacity
            onPress={onSignInPress}
            disabled={isLoading}
            className="w-full bg-blue-600 py-4 rounded-xl items-center mb-4"
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-bold text-base">Sign In</Text>
            )}
          </TouchableOpacity>

          <View className="flex-row justify-end px-1">
            <Link href="/(auth)/signIn">
              <Text className="text-blue-600 font-semibold">
                Forgot Password
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
{
  /* <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-primary text-white"
      keyboardShouldPersistTaps="handled"
    > 
     </ScrollView>  */
}
