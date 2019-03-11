import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const SmartImageComponent = ({ uri,onUriError,onStart,onEnd }) =>
    <View
        style={styles.container}
    >
        <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{ uri: uri }}
            onError={(event) => onUriError(event)}
            onLoadStart={(event) => onStart(event)}
            onLoadEnd={(event) => onEnd(event)}
        />
    </View>


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {

        width: Dimensions.get("window").width,
        height: (Dimensions.get("window").height / 2)
    }
})

export default SmartImageComponent