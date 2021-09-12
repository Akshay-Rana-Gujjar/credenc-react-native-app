import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ContactListItem({
  contact,
  onEditClick,
  onDeleteContact,
  onItemClick
}) {
  return (
    <>
      {/* {!contacts.length && <Text>No Contacts</Text>}
      {contacts.map((contact) => ( */}
      
        <View key={contact.id} style={styles.contactContainer}>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "Are you sure?",
                  `Do you want to delete ${contact.name}'s' record?`,
                  [
                    {
                      text: "Cancel",
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        if (typeof onDeleteContact === "function")
                          onDeleteContact(contact);
                      },
                    },
                  ]
                );
              }}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="trash-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (typeof onEditClick === "function") onEditClick(contact);
                // navigation.navigate(UPDATE_CONTACT, contact)
              }}
            >
              <Ionicons name="create-outline" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={styles.contactName} onPress={()=>{
             if(typeof onItemClick === 'function') onItemClick();
          }}>{contact.name}</Text>
          <Text style={styles.contactUsername}>@{contact.username}</Text>
          <View style={styles.inlineContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text>{contact.email}</Text>
          </View>
          <View style={styles.inlineContainer}>
            <Ionicons
              name="call-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text>{contact.phone}</Text>
          </View>
          <View style={styles.inlineContainer}>
            <Ionicons
              name="location-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.addressText}>
              {contact.address.suite}, {contact.address.street},{" "}
              {contact.address.city}, {contact.address.zipcode}
            </Text>
          </View>
        </View>
      {/* ))} */}

      {/* <Button title="Add"  onPress={()=>{
          addContact({
              name: "Akshay "+new Date().getTime(),
              id: new Date().getTime()
          })
      }}/> */}
    </>
  );
}

// export default connect((state) => {
//   return {
//     contacts: state?.contacts,
//   };
// },(dispatch)=>({
//     addContact: data=>dispatch(createContact(data)),
//     deleteContact: id=>dispatch(deleteContact(id))
// }))(ContactListItem);
