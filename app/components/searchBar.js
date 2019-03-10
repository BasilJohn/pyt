import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const onTextChange=(text,searchFunction)=>{

    searchFunction(text)
};


const Searchbar = ({ searchBy }) =>
    <View style={styles.barContainer}>
        <View style={styles.searchIcon}>
            <Icon name="ios-search" color="#000000" size={25} />
        </View>
        <TextInput
            style={styles.searchTextBox}
            placeholder={"Search"}
            underlineColorAndroid="transparent"
            placeholderStyle={styles.searchPlaceHolderText}
            onChangeText={(text)=>searchBy(text)}
        />
    </View>


const styles = StyleSheet.create({
    barContainer:{
        marginTop:20,
        width:"90%",
        alignSelf:"center",
        backgroundColor:"#FFFFFF",
        height:45,
        flexDirection:"row",
        borderRadius:5,
    },
    searchPlaceHolderText:{
       fontSize:14
    },
    searchIcon:{
        marginLeft:14,
        marginRight:19,
        justifyContent:"center"
    },
    searchTextBox:{
        width:"100%"
    }
})

export default   Searchbar;