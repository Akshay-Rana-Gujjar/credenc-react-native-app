import { Dimensions, StyleSheet } from "react-native";


const {width} = Dimensions.get("screen");

export default StyleSheet.create({
    container:{
        alignItems: "center"
    },
    detailContainer:{
        width: width * .9,
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 4
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    },
    textDetail:{
        fontSize: 20,
        fontWeight: "700"
    }
})