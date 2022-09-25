import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import StatsBar from "../components/statusbar";
import { loginUser } from "../api/auth/loginuser";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const navigation = useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userInfo.username && userInfo.password) {
      const result = await loginUser(userInfo);
      console.log(result);
    } else {
      console.log("Complete the fields");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatsBar />
      <View style={styles.childContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chatt</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="JohnDoe"
            onChangeText={(e) => setUserInfo({ ...userInfo, username: e })}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize={false}
            autoCorrect={false}
            secureTextEntry={true}
            autoComplete="off"
            textContentType="password"
            placeholder="********"
            onChangeText={(e) => setUserInfo({ ...userInfo, password: e })}
          />
        </View>
        <View style={styles.loginContainer}>
          <Pressable style={styles.button.container} onPress={handleLogin}>
            <Text style={styles.button.text}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupMessage.text}>New?</Text>
          <Pressable>
            <Text
              style={styles.signupMessage.button}
              onPress={() => navigation.push("Signup")}
            >
              Sign-up
            </Text>
          </Pressable>
          <Text style={styles.signupMessage.text}>for a new account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "#F4D03F",
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
    margin: 50,
    textAlign: "center",
    fontWeight: "900",
    color: "#B7950B",
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
  loginContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    container: {
      height: 50,
      borderRadius: 5,
      marginVertical: 5,
      width: "90%",
      backgroundColor: "#7D6608",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#F7DC6F",
      fontSize: 20,
    },
  },
  signupContainer: {
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupMessage: {
    text: {
      fontSize: 15,
      marginHorizontal: 2,
      color: "#9A7D0A",
    },
    button: {
      fontSize: 15,
      marginHorizontal: 2,
      color: "#000",
    },
  },
});
