import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TabBar extends React.Component {
    render() {
        return (
            <View style={styles.tabBar}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 46,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  tab: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EEE5E9'
  },
  text: {
      fontSize: 20,
      color: '#7C7C7C'
  }
});
