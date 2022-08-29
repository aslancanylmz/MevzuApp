import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import MatchScreen from './src/screens/MatchScreen/MatchScreen';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <MatchScreen></MatchScreen>
    </SafeAreaView>
  );
};

export default App;
