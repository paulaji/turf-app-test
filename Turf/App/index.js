import { Stack, useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity
  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useMemo, useState } from "react";
import FooterBar from "./src/footer/footer";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Turf Booking App",
          statusBarColor: "#1a2b3c",
          headerStyle: {
            backgroundColor: "#009900",
          },
          headerTitleAlign: "center",
          headerTintColor: "#FFFFFF",
          headerLeft: () => {},
        }}
      />
      <View>
        <Text>Turf Booking App</Text>
        <Text>go play sports you lazy potato!?</Text>
      </View>
      <FooterBar />
    </SafeAreaView>
  );
};

export default Home;
