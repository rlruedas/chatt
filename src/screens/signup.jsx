import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import StatsBar from "../components/statusbar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../api/auth/registeruser";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    email: "test@test.com",
    username: "test",
    password: "test123",
    verifyPass: "test123",
  });

  const navigation = useNavigation();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userInfo.password === userInfo.verifyPass) {
      const result = await createUser(userInfo);
      console.log(result);
    } else {
      console.log("Wrong Password");
    }
  };

  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatsBar />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.input.text}>E-mail</Text>
        <TextInput
          placeholder="JohnDoe@gmail.com"
          style={styles.input.field}
          keyboardType="email-address"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => navigation.second.focus()}
          blurOnSubmit={false}
          onChangeText={(e) => setUserInfo({ ...userInfo, email: e })}
        />
        <Text style={styles.input.text}>Username</Text>
        <TextInput
          ref={(ref) => (navigation.second = ref)}
          onSubmitEditing={() => navigation.third.focus()}
          blurOnSubmit={false}
          placeholder="JohnDoe"
          style={styles.input.field}
          returnKeyType="next"
          onChangeText={(e) => setUserInfo({ ...userInfo, username: e })}
        />
        <Text style={styles.input.text}>Password</Text>
        <TextInput
          ref={(ref) => (navigation.third = ref)}
          onSubmitEditing={() => navigation.fourth.focus()}
          blurOnSubmit={false}
          style={styles.input.field}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true}
          autoComplete="off"
          textContentType="password"
          placeholder="********"
          returnKeyType="next"
          onChangeText={(e) => setUserInfo({ ...userInfo, password: e })}
        />
        <Text style={styles.input.text}>Confirm Password</Text>
        <TextInput
          style={styles.input.field}
          ref={(ref) => (navigation.fourth = ref)}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true}
          autoComplete="off"
          textContentType="password"
          placeholder="********"
          returnKeyType="done"
          onChangeText={(e) => setUserInfo({ ...userInfo, verifyPass: e })}
        />
      </View>
      <View style={styles.submitContainer}>
        <Pressable style={styles.button.container} onPress={handleRegister}>
          <Text style={styles.button.text}>Sign up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4D03F",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  titleContainer: {
    flex: 0.5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#B7950B",
    alignSelf: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    text: {
      width: "90%",
    },
    field: {
      width: "90%",
      backgroundColor: "#fff",
      fontSize: 18,
      padding: 8,
      borderRadius: 5,
      marginVertical: 10,
    },
  },
  submitContainer: {
    flex: 0.5,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
});
