/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
    Text, View, TextInput,
    ScrollView, KeyboardAvoidingView, TouchableOpacity, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './styles';
import moment from "moment";

export default class Home extends React.Component {

    state = {
        name: "",
        age: "",
        dob: "",
        guests: "",
        locality: "",
        address: "",
        userDetails: {}
    };


    openDrawer = () => {

        this.setState({
            name: "",
            age: "",
            dob: "",
            locality: "",
            address: "",
            guests: ""
        });
        this.props.navigation.openDrawer();
    }

    onValueChanged = (text, stateValue) => {

        this.setState({ [stateValue]: text })
    }


    componentDidUpdate = (prevProps, prevState) => {

        const { navigation } = this.props;
        const userData = navigation.getParam('userData', {});

        if (this.props.navigation !== prevProps.navigation && userData!=={}) {
            this.setState({
                name: userData.item.name,
                age: userData.item.age.toString(),
                dob: moment(userData.item.dob).format("DD-MM-YYYY"),
                locality: userData.item.locality,
                address: userData.item.address,
                guests: userData.item.guests.toString()
            });

        }

    }

    handleSubmitButton = () => {

        // const payLoad = {
        //     name: this.state.name,
        //     age: this.state.age,
        //     dob: this.state.dob,
        //     guests: this.state.guests,
        //     locality: this.state.locality,
        //     address: this.state.address
        // }

        alert("Your response saved!")

        let url = "apihere";
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json; charset=utf-8"
        //     },
        //     body: JSON.stringify(payload)
        // })
        //     .then(response => {

        //         alert("Saved")
        //     })
        //     .catch(error => {

        //        console.log(error)
        //     });
    }

    render() {

        return (
            <ScrollView >
                <KeyboardAvoidingView
                    style={Styles.keyboardAvoidingViewContainer}
                >
                    <View style={Styles.container}>
                        <Icon
                            name="menu"
                            size={32}
                            style={Styles.menuIcon}
                            color="#FFFFFF"
                            onPress={this.openDrawer}
                        />
                        <View style={Styles.rvspContainer}>
                            <View style={Styles.header}>
                                <Text style={Styles.headerText}>Complete Your RVSP</Text>
                            </View>
                            <View style={Styles.form}>
                                <View style={Styles.formInput}>
                                    <Text style={Styles.formLabel}>Name</Text>
                                    <TextInput
                                        placeholder="Enter Your Name"
                                        value={this.state.name}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "name")}
                                    />
                                </View>
                                <View style={Styles.formInput}>
                                    <Text style={Styles.formLabel}>Age</Text>
                                    <TextInput
                                        placeholder="Enter Your Age"
                                        value={this.state.age}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "age")}

                                    />
                                </View>
                                <View style={Styles.formInput}>
                                    <Text style={Styles.formLabel}>DOD</Text>
                                    <TextInput
                                        placeholder="Enter Your DOB"
                                        value={this.state.dob}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "dob")}

                                    />
                                </View>
                                <View style={Styles.formInput}>
                                    <Text style={Styles.formLabel}>Locality</Text>
                                    <TextInput
                                        placeholder="Enter Your Locality"
                                        value={this.state.locality}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "locality")}

                                    />
                                </View>
                                <View style={Styles.formInput}>
                                    <Text style={Styles.formLabel}>Number of Guests</Text>
                                    <TextInput
                                        placeholder="Number of Guests(0-2)"
                                        value={this.state.guests}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "guests")}

                                    />
                                </View>
                                <View style={[Styles.formInput, Styles.lastLeg]}>
                                    <Text style={Styles.formLabel}>Address</Text>
                                    <TextInput
                                        multiline
                                        numberOfLines={4}
                                        placeholder="Enter Your Address"
                                        value={this.state.address}
                                        style={Styles.textInput}
                                        placeholderTextColor={"#586A7E"}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(text) => this.onValueChanged(text, "address")}

                                    />
                                </View>
                                <View >
                                    <View style={Styles.footer}>
                                        <TouchableOpacity onPress={this.handleSubmitButton} style={Styles.submitButton}>
                                            <Text style={Styles.submitText}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

        );
    }
}


