import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const TabOne = () => {
  return (
    <View>
      <Link href="/" replace asChild>
        <Button title="Logout" />
      </Link>
      <Link href="/(tabs)/(one)/details" asChild>
        <Button title="details" />
      </Link>

      <Link href="/(tabs)/(one)/500" asChild>
        <Button title="Open detail id 500" />
      </Link>

      <Link href="/(tabs)/(one)/400" asChild>
        <Button title="Open detail id 400" />
      </Link>

      <Link href="/modal" asChild>
        <Button title="Open modal" />
      </Link>

      <Link href="/(aux)/disclaimer" asChild>
        <Button title="Open Disclaimer" />
      </Link>
    </View>
  );
};

export default TabOne;

const styles = StyleSheet.create({});
