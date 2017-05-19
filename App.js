import React from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';

import LoginScreen from "./screens/signin/index";
import SignupVriew from "./screens/signup/";
export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <SignupVriew/>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
AppRegistry.registerComponent('App', () => App);

