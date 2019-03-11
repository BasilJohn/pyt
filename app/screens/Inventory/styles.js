import { StyleSheet, Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export default (Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32425B',
    },
    menuIcon: {
        paddingTop: 30
    },
    searchContainer: {

        flex: 1,
        width: "100%"
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    listContainers: {
        width: "100%"
    },
    userName: {
        color: "#FFFFFF",
        fontSize: 20
    },
    userNameContainer: {
        paddingLeft: 20,
        paddingBottom: 10
    },
    activitiyIndicatorStyle:{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }

}));
