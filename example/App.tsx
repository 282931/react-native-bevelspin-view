import { StyleSheet, Text, View } from 'react-native';

import { BevelView } from '../src/BevelView';
import React from 'react';

const App = () => (
  <View style={styles.container}>
    <BevelView style={styles.bevel}>
      <Text style={styles.text}>TEST</Text>
    </BevelView>
  </View>
);

const styles = StyleSheet.create({
  bevel: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#333',
  },
});

export default App;
