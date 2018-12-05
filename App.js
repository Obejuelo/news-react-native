import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import TabBar from './components/tabBar/TabBar';
import Routes from './components/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
