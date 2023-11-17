import { View, Text, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Slot, Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="hidden" options={{ href: null }} />

      <Tabs.Screen
        name="(one)"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: "Person",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(three)"
        options={{
          headerShown: false,
          tabBarLabel: "Drawer",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
