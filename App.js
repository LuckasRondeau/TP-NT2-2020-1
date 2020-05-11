import React from 'react';
import { StyleSheet, Text ,Image, View } from 'react-native';
import {vibrate} from './utils'
//import './style.css';
//import Hello from "./Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TIMER POMODORO</Text>
      <Text>00:00</Text>
         </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
