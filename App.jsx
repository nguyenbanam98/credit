import React from 'react';
import { View, StyleSheet } from 'react-native';

import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Navigation />

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 20
  }
});

export default App;