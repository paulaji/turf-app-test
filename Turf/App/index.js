import { Stack, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import {
    View,
    Text,
    TouchableOpacity
  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useMemo, useState } from "react";
import FooterBar from "./src/footer/footer";
import Header from "./src/header/header";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Turf Booking App",
          statusBarColor: "#3e7e2f",
          headerStyle: {
            backgroundColor: "#3e7e2f",
          },
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerLeft: () => {
            return (
              <TouchableOpacity>
                 <Ionicons name="menu" size={30} color="#000" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                 <Ionicons name="person-circle" size={30} color="#000" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Header />
      <FooterBar />
    </SafeAreaView>
  );
};

export default Home;
