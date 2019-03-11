import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ListView,
    Image,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MenuItem = ({ icon, name, onItemPress }) =>
    <TouchableOpacity
        style={styles.menuItem}
        onPress={() => onItemPress()}
    >
        <Icon name={icon} size={25} color="#FFFFFF" style={{ margin: 15 }} />
        <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>


const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row'
    },
    menuItemText: {
        fontWeight: "bold",
        fontSize: 15,
        fontWeight: '300',
        margin: 15,
        color: "#FFFFFF"
    }
})

export default MenuItem