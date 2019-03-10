import { StyleSheet, Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export default (Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32425B',
    },
    menuIcon: {
        zIndex: 9,
        position: "absolute",
        top: 30,
        left: 20
    },
    rvspContainer:{
        flex: 1,
        width:"100%"

    },
    header:{
        alignItems:"center"
    },
    headerText:{
        color:"#FFFFFF",
        fontSize:15,
        paddingTop:50
    },
    form:{
       
        paddingTop:10,
        width:"100%"
    },
    formLabel:{
         color:"#FFFFFF",
        textAlign:"center",
         paddingBottom:10

    },
    textInput:{
       
        borderWidth:1,
        borderColor:"#4C5E74",
        width:"90%",
        alignSelf:"center"
    },

    keyboardAvoidingViewContainer:{
        backgroundColor: "#A0DFCE",
        flex: 1,
        padding: 0
    },
    formInput:{

        paddingTop:10
    },
    footer:{
        height:50,
        width:"100%",
        position:"absolute",
        bottom:0,
        backgroundColor:"#7BD5D3"
    },
    submitText:{
        textAlign:"center",
        color:"#DDF7F4",
        fontWeight:"bold",
        letterSpacing:2,
        fontSize:20
    },
    lastLeg:{

        paddingBottom:60
    },
    submitButton:{
        
        justifyContent:"center", 
        width:"100%",
        height:"100%"
    }

}));
