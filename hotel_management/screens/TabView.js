import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AddMenuItems from './AddMenuItems';
import ViewMenu from './ViewMenu';
import HomePage from './HomePage';
import MultiRowList from './MultiRowList';


const HomeStack = createStackNavigator({
  Home_Page: HomePage,
});

const ViewStack = createStackNavigator({
    View_Menu: ViewMenu,
  });

const SettingsStack = createStackNavigator({
  Add_Menu: AddMenuItems,
});

const MultiRowStack = createStackNavigator({
    Staff_Details: MultiRowList,
  });

const TabNavigator = createBottomTabNavigator({
    View_Menu: ViewStack,
    Home_Page: HomeStack,
    Add_Menu: SettingsStack,
    Staff_Details:MultiRowStack
});

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return <AppContainer />;
}