import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TabBar extends React.Component {
    // click = () => {
    //     this,props.navigation('Category');
    // }
    render() {
        return (
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={()=>{this.props.navigateHome()}}>
                    <View style={styles.tab}>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>{this.props.navigateCategory()}}>
                    <View style={styles.tab}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tab}>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#2B303A',
    height: 46,
    marginTop: 24,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tab: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#EEE5E9'
  }
});
