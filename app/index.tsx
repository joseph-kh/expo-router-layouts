import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Page = () => {
  const router = useRouter();
  return (
    <View>
      <Button onPress={() => router.push("/register")} title="Open Register" />
      <Link href="/register" asChild>
        <Button title="Open Register" />
      </Link>
      <Link href="/(tabs)/(one)/one" replace asChild>
        <Button title="Open Login" />
      </Link>
    </View>
  );
};

export default Page;
