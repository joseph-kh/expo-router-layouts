import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const ParamPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>{`ID: ${id}`}</Text>
    </View>
  );
};

export default ParamPage;

const styles = StyleSheet.create({});
