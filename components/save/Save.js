import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from '../Nav'
import CardNew from '../card/CardNew';

export default class Save extends React.Component {
  navigateHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Nav title='GUARDADO'/>
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
