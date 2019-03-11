/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './styles';
import SearchBar from '../../components/searchBar';
import { _ } from "lodash";
import JsonData from '../../assets/utils/MOCK_DATA.json';

export default class Home extends React.Component {


    state = {
        fullList: JsonData,
        filteredList: []
    };

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    handleUserNamePress = (data) => {

        this.props.navigation.navigate('Home', {
            userData: data
        });
    }


    _keyExtractor = (item, index) => item.id;

    renderRowItem = itemData => {
        return (
            <TouchableOpacity onPress={() => this.handleUserNamePress(itemData)}>
                <View style={Styles.userNameContainer}>
                    <Text style={Styles.userName}>{itemData.item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    filterRecords = (text) => {

        if (text !== "") {

            const rvspList = _.filter(this.state.fullList, item => {
                return item.name
                    .toString()
                    .toLowerCase()
                    .includes(text.toLowerCase()) ||
                    item.locality
                        .toString()
                        .toLowerCase()
                        .includes(text.toLowerCase());
            });
            this.setState({ filteredList: rvspList });
        }
        else {
            this.setState({ filteredList: [] });
        }
    }


    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.searchBar}>
                    <Icon
                        name="menu"
                        size={32}
                        style={Styles.menuIcon}
                        color="#FFFFFF"
                        onPress={this.openDrawer}
                    />
                    <SearchBar
                        hideIcon={false}
                        placeholderText="Search"
                        searchBy={this.filterRecords}
                    />
                </View>
                <View style={Styles.listContainers}>
                    <FlatList
                        data={this.state.filteredList}
                        extraData={this.state.filteredList}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderRowItem}
                    />
                </View>


            </View>
        );
    }
}


