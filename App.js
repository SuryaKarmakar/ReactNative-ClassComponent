import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  //Class components have a render() function. Whatever is returned inside it is rendered as a React element ...
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Class Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
