import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import OverviewScreen from '../screens/OverviewScreen';

export default createBottomTabNavigator(
  {
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        title: 'Overview',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="ios-home" type="MaterialIcons" />
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
