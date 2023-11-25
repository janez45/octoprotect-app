import { NavigationContainer } from "@react-navigation/native";
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./app/LoginPage";
import DevicesPage from "./app/DevicesPage";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer theme={MD3LightTheme}>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const Stack = createNativeStackNavigator();
const selectAuthed = state => state.app.authed;

export const Router = () => {
  const authed = useSelector(selectAuthed)
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <NavBar {...props} />
      }}>
      {!authed && <>
        <Stack.Screen name="Login" component={LoginPage} />
      </>}
      {authed && <>
        <Stack.Screen name="Devices" component={DevicesPage} />
      </>}
    </Stack.Navigator>
  )
}