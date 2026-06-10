import {
  useForgotPassword,
  useResetPassword,
  useVerifyOTP,
} from "@/hooks/useLogin";
import { Ionicons } from "@expo/vector-icons";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
type ForgotPasswordStep = "email" | "otp" | "newPassword";
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export default function SignInScreen() {
  const [step, setStep] = useState<ForgotPasswordStep>("email");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    otp: "",
    password: "",
  });
  const forgotPasswordMutation = useForgotPassword();
  const verifyOtpMutation = useVerifyOTP();
  const resetPasswordMutation = useResetPassword();

  const handleBack = () => {
    if (step === "otp") {
      setStep("email");
    } else if (step === "newPassword") {
      setStep("otp");
    } else {
      router.back();
    }
  };
  const resetErrors = () => {
    setErrors({
      email: "",
      otp: "",
      password: "",
    });
  };
  const handleSendOtp = async () => {
    resetErrors();
    if (email === "" || emailRegex.test(email) === false) {
      setErrors((pre) => {
        return { ...pre, email: "Enter a valid Email Id" };
      });
      return;
    }

    try {
      await forgotPasswordMutation.mutateAsync({ email });
      //console.log("SUCCESS:", result.data);
      setStep("otp");
    } catch (error) {
      const err = error as AxiosError<any>;
      console.log("ERROR:", err);
      if (err?.response?.data) {
        setErrors((pre) => {
          return {
            ...pre,
            email: err?.response?.data?.error ?? "Invalid Email",
          };
        });
      }
    }
  };

  const handleVerifyOTP = async () => {
    resetErrors();
    if (otp === "") {
      setErrors((pre) => {
        return { ...pre, otp: "Enter OTP" };
      });
      return;
    }
    try {
      await verifyOtpMutation.mutateAsync({
        email,
        otp,
      });
      //console.log("SUCCESS:", result.data);
      setStep("newPassword");
    } catch (error) {
      const err = error as AxiosError<any>;
      console.log("ERROR:", err);
      console.log("Response:", err?.response?.data);
      if (err?.response?.data) {
        setErrors((pre) => {
          return { ...pre, otp: err?.response?.data?.error ?? "OTP Error" };
        });
      }
    }
  };
  const handleResetPassword = async () => {
    resetErrors();
    if (password === "" || confirm_password === "") {
      setErrors((pre) => {
        return { ...pre, password: "Enter Password" };
      });
      return;
    } else if (password !== confirm_password) {
      setErrors((pre) => {
        return { ...pre, password: "Password should be same" };
      });
      return;
    }
    try {
      await resetPasswordMutation.mutateAsync({
        email,
        confirm_password,
        password,
      });

      router.replace("/(auth)/signIn");
    } catch (error) {
      const err = error as AxiosError<any>;
      console.log(err);
      if (err?.response?.data) {
        setErrors((pre) => {
          return {
            ...pre,
            password: err?.response?.data?.error ?? "Password Error",
          };
        });
      }
    }
  };

  const isLoading = forgotPasswordMutation.isPending;

  return (
    <ScrollView
      className="bg-primary text-white"
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 justify-center px-6 py-8 relative ">
        <TouchableOpacity
          onPress={handleBack}
          className="absolute left-4 top-12 z-10"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View className="bg-white px-6 py-8 border rounded-xl mx-1">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            {step === "email"
              ? "Reset Password"
              : step === "otp"
                ? "Enter OTP"
                : "Reset your Password"}
          </Text>
          <Text className="text-gray-500 mb-4">
            {step === "email"
              ? "Enter your email to receive an OTP"
              : step === "otp"
                ? "Enter the OTP sent to your email"
                : "Enter your new password"}
          </Text>
          {step === "email" && (
            <>
              <TextInput
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 "
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {!!errors.email && (
                <Text className="text-red-500 mt-0 mb-3">{errors.email}</Text>
              )}
              <TouchableOpacity
                onPress={handleSendOtp}
                disabled={isLoading}
                className="w-full bg-primary py-4 rounded-xl items-center mb-4"
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-base">
                    Send OTP
                  </Text>
                )}
              </TouchableOpacity>
            </>
          )}

          {step === "otp" && (
            <>
              <Text className="py-2 mb-1">OTP sent to {email}</Text>

              <TextInput
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
                placeholderTextColor="#9CA3AF"
                maxLength={6}
              />
              <View className="flex-row justify-end items-end mt-0 mb-3">
                <Text className="">{otp.length} / 6</Text>
              </View>
              {!!errors.otp && (
                <Text className="text-red-500 mt-0 mb-3">{errors.otp}</Text>
              )}
              <TouchableOpacity
                onPress={handleVerifyOTP}
                disabled={isLoading}
                className="w-full bg-primary py-4 rounded-xl items-center mb-4"
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-base">
                    Verify OTP
                  </Text>
                )}
              </TouchableOpacity>
            </>
          )}

          {step === "newPassword" && (
            <>
              <TextInput
                placeholder="New Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 "
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                placeholder="Re Enter New Password"
                value={confirm_password}
                onChangeText={setConfirm_password}
                secureTextEntry
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 "
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TouchableOpacity
                onPress={handleResetPassword}
                disabled={isLoading}
                className="w-full bg-primary py-4 rounded-xl items-center mb-4"
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-base">
                    Reset Password
                  </Text>
                )}
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
