/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './screens/Home';
import {NativeBaseProvider} from 'native-base';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigation from './Navigation';

const App = () => {
  return (
    <PaperProvider>
      <NativeBaseProvider>
        <SafeAreaView style={styles.Container}>
          <StatusBar barStyle={'default'} />
          <Navigation />
        </SafeAreaView>
      </NativeBaseProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#8785A2',
    flex: 1,
  },
});

export default App;
