import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";
import AddEvents from "./screens/AddEvents";
import ViewEvents from "./screens/ViewEvents";
import UpdateEvents from "./screens/UpdateEvents";
import BalconyRoominfo from "./screens/BalconyRoomInfo";
import AddMenuItems from "./screens/AddMenuItems";
import AddOrder from "./screens/AddOrder";
import ViewMenu from "./screens/ViewMenu";
import UpdateMenuItems from "./screens/UpdateMenuItems";
import UpdateOrderDetails from "./screens/UpdateOrderDetails";
import CusViewMenu from "./screens/CusViewMenu";
import MultiRowList from "./screens/MultiRowList";
import Cus_HomePage from "./screens/Cus_HomePage";
import TabView from "./screens/TabView";
import HomePage from "./screens/HomePage";
import CusViewOrderDetails from "./screens/CusViewOrderDetails";
import ViewOrderDetails from "./screens/ViewOrderDetails";
import Restaurant_SplashScreen from "./screens/Restaurant_SplashScreen";



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Restaurant_SplashScreen"
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddEvents" component={AddEvents} />
        <Stack.Screen name="ViewEvents" component={ViewEvents} />
        <Stack.Screen name="UpdateEvents" component={UpdateEvents} />
        <Stack.Screen name="BalconyRoominfo" component={BalconyRoominfo} />
        <Stack.Screen name="Restaurant_SplashScreen" component={Restaurant_SplashScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MultiRowList" component={MultiRowList} />
        <Stack.Screen name="Add Menu" component={AddMenuItems} />
        <Stack.Screen name="View Menu" component={ViewMenu} />
        <Stack.Screen name="Tab View" component={TabView} />
        <Stack.Screen name="View Order" component={CusViewOrderDetails} />
        <Stack.Screen name="View Order Details" component={ViewOrderDetails} />
        <Stack.Screen name="Cus View Menu" component={CusViewMenu} />
        <Stack.Screen name="Update Menu" component={UpdateMenuItems} />
        <Stack.Screen name="Update Order" component={UpdateOrderDetails} />
        <Stack.Screen name="Cus Home Page" component={Cus_HomePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Add Order" component={AddOrder} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});