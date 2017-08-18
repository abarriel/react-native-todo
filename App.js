import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  main: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  footer: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.header}>
    </View>
    <View style={styles.main}>
      <Text>Hello World Mehdi</Text>
    </View>
    <View style={styles.footer}>
    </View>
  </View>
);

export default App;
