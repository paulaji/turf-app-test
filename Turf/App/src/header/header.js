import React from "react";
import { ScrollView, Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const data = [
    { key: "football", iconName: "ios-football-outline", label: "Football" },
    { key: "cricket", iconName: "ios-baseball-outline", label: "Cricket" },
    { key: "cricket", iconName: "ios-gamepad-outline", label: "Arcade" },
  ];

  const renderButton = ({ item }) => {
    return (
      <Pressable
        style={styles.button}
        onPress={() => {
          // Handle button press
        }}
      >
        <Ionicons name={item.iconName} size={24} color="white" />
        {item.label ? (
          <Text style={styles.buttonText}>{item.label}</Text>
        ) : null}
      </Pressable>
    );
  };
  
  

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderButton}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3e7e2f",
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 25,
    padding: 8,
    margin: 6,
  },
  buttonText: {
    marginLeft: 6,
    marginRight:3,
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 15,
  },
});
