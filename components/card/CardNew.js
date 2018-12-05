import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CardNew = (props) => {
    const {urlToImage, title, description,publishedAt} = props.news.item;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={{uri: urlToImage}}
                    />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

export default CardNew;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        overflow: 'hidden',
        borderColor: '#7C7C7C',
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        height: 200,
        backgroundColor: '#2B303A',
        alignItems: 'stretch'
    },
    image: {
        height: 200
    },
    title: {
        fontSize: 20,
        color: '#7C7C7C'
    },
    description:{
        fontSize: 12,
        color: '#7C7C7C',
        paddingBottom: 10
    }
  });
  