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
                <View elevation={5} style={styles.container}>
                    <Text style={styles.text}>{this.props.category}</Text>
                </View>
            </TouchableHighlight>
        )
    }
        
}

export default CardNew;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 10,
        height: 100,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0.5,
        shadowColor: '#000000',
        borderColor: '#d6d7da',
        shadowOffset: {
            width: 0,
            height: 3
          },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    text: {
        fontSize: 25,
        color: '#7C7C7C',
        textAlign: 'center'
    }
  });
  