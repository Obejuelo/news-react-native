import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {getNews} from '../helper';

import Nav from '../Nav'
import CardNew from '../card/CardNew';

export default class Home extends React.Component {
  state = {
    news: []
  }

  componentWillMount() {
    this._getNews();
  }

  _getNews = () => {
    let cat = this.state.category;
    getNews('general')
      .then(data => {
        this.setState({news: data.articles})
      })
      .catch(err => {console.log(err)})
  }

  keyExtractor = (item, index) => item.id;

  render() {

    const data = this.props.navigation.getParam('news', this.state.news)
    const category = this.props.navigation.getParam('category', 'general')

    return (
      <View style={styles.container}>
        <Nav title={category}/>
        <FlatList 
          data={data}
          keyExtractor={this.keyExtractor}
          key={()=> {Date.now()}}
          renderItem={(news) => <CardNew news={news}/>}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
