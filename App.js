import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import {
  CONTACT_DETAIL,
  CREATE_CONTACT,
  HOME,
  UPDATE_CONTACT,
} from "./src/constants/screen";
import ContactDetail from "./src/screens/ContactDetail";
import CreateContact from "./src/screens/CreateContact";
import ErrorBoundary from "react-native-error-boundary";
import ErrorFallback from "./src/components/ErrorFallback";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={HOME}
              options={{
                title: "All Contacts",
              }}
              component={Home}
            />
            <Stack.Screen
              name={CONTACT_DETAIL}
              options={{
                title: "Contact Detail",
              }}
              component={ContactDetail}
            />
            <Stack.Screen
              name={CREATE_CONTACT}
              options={{
                title: "Create new Contact",
              }}
              component={CreateContact}
            />
            <Stack.Screen
              name={UPDATE_CONTACT}
              options={{
                title: "Update Contact Detail",
              }}
              component={CreateContact}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
  );
}
