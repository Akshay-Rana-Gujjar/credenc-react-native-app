import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from "./styles";
import { CREATE_CONTACT } from "../../constants/screen";

export default function AddNewContact({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.addButton} onPress={()=>{
                navigation.navigate(CREATE_CONTACT)
            }}>+</Text>
        </View>
    )
}
