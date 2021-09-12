import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import ContactListItem from "../ContactListItem";
import styles from "./styles";
import { deleteContact, getContact } from "../../redux/actions";
import { CONTACT_DETAIL, UPDATE_CONTACT } from "../../constants/screen";
import { TouchableOpacity } from "react-native-gesture-handler";

function ContactList({
  contacts,
  isLoading,
  error,
  loadContact,
  deleteContact,
  navigation,
}) {
  // const contactsWithLastNull = [...contacts, {id: null}];
  // const [contactData, setContactData] = useState([]);

  useEffect(() => {
    loadContact();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          animating
          hidesWhenStopped
          size="large"
          color="#00c0c7"
        />
      </View>
    );
  }

  console.log({contacts});

  return (
    <View>
      {!!contacts.length && (
        <FlatList
          data={contacts}
          keyExtractor={(item) => (item.id ? item.id.toString() : "qwerty")}
          renderItem={({ item }) => {
            return item.id ? (
                <ContactListItem
                  contact={item}
                  onEditClick={() => navigation.navigate(UPDATE_CONTACT, item)}
                  onDeleteContact={() => {
                    deleteContact(item.id);
                  }}
                  onItemClick={()=>{
                    navigation.navigate(CONTACT_DETAIL, {id: item.id})
                  }}
                />
            ) : (
              <View style={styles.spacer} />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

function mapStateToProps(state) {
  console.log({ state });
  return {
    contacts: state.contacts.contacts,
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadContact: () => dispatch(getContact()),
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
