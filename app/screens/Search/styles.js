import { StyleSheet, Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export default (Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32425B',
    },
    menuIcon: {
        // zIndex: 9,
        //position: "absolute",
        paddingTop: 30,
       //  paddingLeft: 20
    },
    searchContainer: {

        flex: 1,
        width: "100%"
    },
    searchBar: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    listContainers:{

        height:"80%"
    },
    userName:{
     color:"#FFFFFF",
     fontSize:20
    },
    userNameContainer:{
        paddingLeft:20,
        paddingBottom:10
    }

}));
