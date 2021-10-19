import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinNames}>
            <Image 
            style={styles.image}
                source={{uri: coin.image}}
            />
            <View style={styles.containerNames} >
            <Text style={styles.text}>{coin.name}</Text>
            <Text style={styles.symbol} >{coin.symbol}</Text>
            </View>
            </View>
            <View>
            <Text style={styles.textPrice}>$ {coin.current_price} </Text>
            <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp: styles.priceDown]}>
                {coin.price_change_percentage_24h}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinNames: {
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    },
    image:{
        width: 30,
        height:30
    },
    symbol: {
        color: '#606060',
        textTransform: 'uppercase'
    },
    containerNames: {
        marginLeft: 10
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#FF0000'
    },
    textPrice: {
        color: 'white',
        textAlign: 'right'
    }
   
})

export default CoinItem
