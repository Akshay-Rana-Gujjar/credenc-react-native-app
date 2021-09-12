import React from "react";
import { View, StyleSheet } from "react-native";
import AddNewContact from "../../components/AddNewContact";
import ContactList from "../../components/ContactList";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ContactList navigation={navigation} />
      <AddNewContact  navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
      alignItems: "center",
    },
  });