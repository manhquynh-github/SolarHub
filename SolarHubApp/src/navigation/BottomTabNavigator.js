import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import OverviewScreen from '../screens/OverviewScreen';
import ContactScreen from '../screens/ContactScreen';

export default createBottomTabNavigator(
  {
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        title: 'Overview',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="home" type="Entypo" />
        ),
      },
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        title: 'Contact',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="ios-contact" type="Ionicons" />
        ),
      },
    },
  },
  {
    initialRouteName: 'Overview',
    tabBarOptions: {
      style: {
        backgroundColor: Colors.tabBar,
        elevation: 10,
        borderTopWidth: 0,
      },
      labelStyle: {
        color: '#000',
      },
    },
    navigationOptions: {
      tabBarButtonComponent: (props) => (
        <TouchableNativeFeedback
          delayPressIn={0}
          onPress={props.onPress}
          background={TouchableNativeFeedback.Ripple('lightgray')}>
          <View {...props} />
        </TouchableNativeFeedback>
      ),
    },
  }
);
