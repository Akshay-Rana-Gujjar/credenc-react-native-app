import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { getContactDetail } from "../../redux/actions";

function ContactDetail({ isLoading, contactDetail, getContactDetail, route }) {
  const { id } = route.params;
  console.log({ contactDetail });

  useEffect(() => {
    getContactDetail(id);
  }, []);

  if (isLoading) {
    return <ActivityIndicator color="red" size="large" style={{marginTop: 20}}/>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        {Object.keys(contactDetail).length !== 0 && (
          <>
            <Text style={styles.text}>Name: <Text style={styles.textDetail} >{contactDetail.name}</Text></Text>
            <Text style={styles.text}>Username: <Text style={styles.textDetail} >{contactDetail.username}</Text></Text>
            <Text style={styles.text}>Email: <Text style={styles.textDetail} >{contactDetail.email}</Text></Text>
            <Text style={styles.text}>Phone: <Text style={styles.textDetail} >{contactDetail.phone}</Text></Text>
            <Text style={styles.text}>
                Address: <Text style={styles.textDetail} >{contactDetail.address.suite}, {contactDetail.address.street},{" "}
              {contactDetail.address.city}, {contactDetail.address.zipcode}
            </Text></Text>
            <Text style={styles.text}>Website: <Text style={styles.textDetail} >{contactDetail.website}</Text></Text>
          </>
        )}
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    contactDetail: state.contacts.contactDetail,
    isLoading: state.contacts.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContactDetail: (id) => dispatch(getContactDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);
