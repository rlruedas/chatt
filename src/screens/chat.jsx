import { Pressable, StyleSheet, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import React from "react";

export default function Chat() {
  const handleSignOut = e => {
    e.preventDefault();
    signOut(auth);
  };
  return (
    <View>
      <Text>Chat</Text>
      <Pressable onPress={handleSignOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
