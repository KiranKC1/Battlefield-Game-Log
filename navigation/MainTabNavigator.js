import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BF3StatsScreen from '../screens/BF3StatsScreen';



const StatsStack = createStackNavigator({
  Stats: BF3StatsScreen
});

StatsStack.navigationOptions = {
  tabBarLabel: 'Battlefield 3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused = {focused}
      name={Platform.OS === 'ios' ? 'ios-cog' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  StatsStack
});
