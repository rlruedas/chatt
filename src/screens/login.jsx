import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

import StatsBar from "../components/statusbar";

export default function Login() {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatsBar />
      <View style={styles.childContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chatt</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder="JohnDoe" />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize={false}
            autoCorrect={false}
            secureTextEntry={true}
            autoComplete="off"
            textContentType="password"
            placeholder="********"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "#FFD700",
    height: "100%",
    width: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  childContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 90,
    textAlign: "center",
    margin: 50,
    fontWeight: "900",
  },
  inputContainer: {
    width: "80%",
    marginVertical: 10,
    flex: 2,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    width: "90%",
    height: 50,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
