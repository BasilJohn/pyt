/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './styles';
import SearchBar from '../../components/searchBar';
import { _ } from "lodash";
import SmartImageComponent from '../../components/smartImageComponent';


export default class Home extends React.Component {


    state = {
        uri: "https://picsum.photos/200/300/?random",
        placeHolderUri: "https://loremflickr.com/200/300/dog",
        showLoader: false
    };

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    searchValue = (text) => {

        this.setState({ uri: text });

    }
    setPlaceHolderUri = () => {

        this.setState({ uri: this.state.placeHolderUri });
    }

    showLoader = () => {

        this.setState({ showLoader: true });
    }

    hideLoader = () => {

        this.setState({ showLoader: false });
    }


    componentDidUpdate = (prevProps, prevState) => {

        const { navigation } = this.props;
        const clearData = navigation.getParam('clearData', true);

        if (this.props.navigation !== prevProps.navigation && clearData) {

            this.setState({ uri: "https://picsum.photos/200/300/?random", showLoader: false });
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
                        hideIcon={true}
                        placeholderText=""
                        searchBy={this.searchValue}
                        defaultText={this.state.uri} />
                </View>
                <View style={Styles.listContainers}>
                    <SmartImageComponent
                        onStart={this.showLoader}
                        onEnd={this.hideLoader}
                        onUriError={this.setPlaceHolderUri}
                        uri={this.state.uri} />
                </View>

                {this.state.showLoader && <View style={Styles.activitiyIndicatorStyle}>
                    <ActivityIndicator size="large" />
                </View>}

            </View>
        );
    }
}


