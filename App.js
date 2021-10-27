import { StatusBar } from 'expo-status-bar';
import React from 'react';
  
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import HttpExample from './list.js'
export default function App() {

  return (
    <HttpExample />
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
