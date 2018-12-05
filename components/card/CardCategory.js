import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {getNews} from '../helper';

class CardNew extends Component {

    state= {
        news: []
    }

    componentDidMount() {
        getNews(this.props.category)
            .then(data => {
                this.setState({news: data.articles})
            })
    }

    setCategory = () => {
        this.props.navigation.navigate('Home', {news: this.state.news, category: this.props.category})
    }
    
    render() {
        return(
            <TouchableHighlight onPress={this.setCategory}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.category}</Text>
                </View>
            </TouchableHighlight>
        )
    }
        
}

export default CardNew;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B303A',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 10,
        height: 100,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    text: {
        fontSize: 25,
        color: '#eee5e9',
        textAlign: 'center'
    }
  });
  