import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'



const Searchbar = ({ searchBy, hideIcon, placeholderText, defaultText }) =>
    <View style={styles.barContainer}>
        <View style={hideIcon ? styles.displayNone : styles.searchIcon}>
            <Icon name="ios-search" color="#000000" size={25} />
        </View>
        <TextInput
            style={styles.searchTextBox}
            placeholder={placeholderText}
            underlineColorAndroid="transparent"
            value={defaultText}
            placeholderStyle={styles.searchPlaceHolderText}
            onChangeText={(text) => searchBy(text, placeholderText)}
        />
    </View>


const styles = StyleSheet.create({
    barContainer: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        height: 45,
        flexDirection: "row",
        borderRadius: 5,
    },
    searchPlaceHolderText: {
        fontSize: 14
    },
    searchIcon: {
        marginLeft: 14,
        marginRight: 19,
        justifyContent: "center"
    },
    searchTextBox: {
        width: "100%"
    },
    displayNone: {
        display: "none"
    }
})

export default Searchbar;