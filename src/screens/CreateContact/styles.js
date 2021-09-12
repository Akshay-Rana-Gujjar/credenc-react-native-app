import { Dimensions, StyleSheet } from "react-native";


const {width} = Dimensions.get("screen");

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        paddingTop: 20
    },
    input:{
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        width: width * .9,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    createConactText: {
        textAlign: "center",
        padding:  50,
        paddingVertical: 20,
        backgroundColor: "#00c0c7",
        borderRadius: 6,
        color: "#fff",
        fontWeight: "700",
        elevation: 4
    }
});