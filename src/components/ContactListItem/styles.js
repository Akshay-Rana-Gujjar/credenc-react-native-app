import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    contactContainer : {
        padding: 20,
        backgroundColor: "#fff",
        margin: 10,
        elevation: 6,
        borderRadius: 10
    },
    contactName:{
        fontSize: 20
    },
    contactUsername:{
        color: "#818181"
    },
    icon:{
        marginRight: 5
    },
    inlineContainer:{
        flexDirection: "row",
        marginTop: 10,
        paddingRight: 20
    },
    actionContainer:{
        flexDirection: "row",
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 1
    }
}); 