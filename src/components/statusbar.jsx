import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

const StatsBar = () => {
  const statusBarStyle = "dark-content";

  return <StatusBar translucent backgroundColor={"transparent"} barStyle={statusBarStyle} />;
};

export default StatsBar;

const styles = StyleSheet.create({});
