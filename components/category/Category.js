import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Nav from '../Nav'
import CardCategory from '../card/CardCategory';

export default class Category extends React.Component {
  state= {
    category: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  }
  
  navigateHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <Nav title='CATEGORÍAS'/>
        <FlatList 
          data={this.state.category}
          keyExtractor={()=> {Date.now()}}
          key={()=> {Date.now()}}
          renderItem={(cat) => <CardCategory 
                                  category={cat.item} 
                                  navigation={this.props.navigation}
                                  />}/>
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
