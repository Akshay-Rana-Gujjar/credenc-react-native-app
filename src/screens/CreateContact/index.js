import React, { useState } from "react";
import { View, TextInput, Text, ActivityIndicator } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { createContact, resetCreateContactState, updateContact } from "../../redux/actions";
import styles from "./styles";

function CreateContact({
  isLoading,
  error,
  createContact,
  contactCreated,
  updateContact,
  resetCreateContact,
  route,
  navigation
}) {
  const userData = route.params;
  const [userInputData, setUserInputData] = useState(
    userData || { address: {} }
  );

  if (contactCreated) {
    alert(`Contact ${userData ? "updated":"created"} successfully!`);
    resetCreateContact();
    if(!userData){
      setTimeout(() => {
        setUserInputData({ address: {} })
      }, 1000);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={userInputData.name}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, name: text }));
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          value={userInputData.email}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, email: text }));
          }}
        />
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="phone number"
          value={userInputData.phone}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, phone: text }));
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Suite"
          value={userInputData.address.suite}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, address: {...prevVal.address, suite: text} }));
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={userInputData.address.street}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, address: {...prevVal.address, street: text} }));
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={userInputData.address.city}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, address: {...prevVal.address, city: text} }));
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          value={userInputData.address.zipcode}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, address: {...prevVal.address, zipcode: text} }));
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="username"
          value={userInputData.username}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, username: text }));
          }}
        />
        {/* {!userData && <TextInput
          style={styles.input}
          placeholder="ID"
          keyboardType="number-pad"
          value={userInputData.id}
          onChangeText={(text) => {
            setUserInputData((prevVal) => ({ ...prevVal, id: text }));
          }}
        />} */}

        {isLoading ? (
          <ActivityIndicator color="red" />
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                console.log({userInputData});
              if (Object.keys(userInputData).length < 5)
                return alert("All fields are mandatory!");
              else if (userData) updateContact(userInputData);
              else createContact(userInputData);
            }}
            disabled={isLoading}
          >
            <Text style={styles.createConactText}>
              {userData ? "Update" : "Create"} Contact
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
    contactCreated: state.contacts.contactCreated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createContact: (data) => dispatch(createContact(data)),
    updateContact: (data) => dispatch(updateContact(data)),
    resetCreateContact: ()=>dispatch(resetCreateContactState())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact);
