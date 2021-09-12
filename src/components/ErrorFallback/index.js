import React from "react";
import { View, Text } from "react-native";

export default ErrorFallback = ({ error, resetError }) => (
    <View>
      <Text style={{fontSize: 22, fontWeight: "700"}} >Something happened!</Text>
      <Text>{error.toString()}</Text>
      <Button onPress={resetError} title='Try again' />
    </View>
  )
  