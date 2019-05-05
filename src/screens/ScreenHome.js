import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Image,  Text, View} from 'react-native';

import {
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';

import ScreenAbout from "./ScreenAbout";
import ScreenSettings from './ScreenSettings';

import ScreenCall from './ScreenCall';
import ScreenFavorites from './ScreenFavorites';
import ScreenHistory from './ScreenHistory';
import ScreenOrder from './ScreenOrder';
import ScreenOther from './ScreenOther';



const tabBarIcon = (icon) => ({ tintColor }) => (
  <Image source={icon}
         style={[{width: 26, height: 26}, {tintColor: tintColor}]} />
);

const AppNavigator = createMaterialTopTabNavigator({

  ScreenHistory: {
    screen: ScreenHistory,
    navigationOptions: {
      tabBarIcon: tabBarIcon(require('./images/ic_menu_history.png')),
    }
  },

  ScreenFavorites: {
    screen: ScreenFavorites,
    navigationOptions: {
      tabBarIcon: tabBarIcon(require('./images/ic_menu_favorite.png')),
    }
  },

  ScreenOrder: {
    screen: ScreenOrder,
    navigationOptions: {
      tabBarIcon: tabBarIcon(require('./images/ic_menu_search.png')),
    }
  },

  ScreenCall: {
    screen: ScreenCall,
    navigationOptions: {
      tabBarIcon: tabBarIcon(require('./images/ic_menu_call.png')),
    }
  },

  ScreenOther: {
    screen: ScreenOther,
    navigationOptions: {
      tabBarIcon: tabBarIcon(require('./images/ic_menu_other.png')),
    }
  }

}, {
    initialRouteName: 'ScreenHistory',
    // order: ['Settings', 'ScreenHistory'],
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#632682',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0.5,
        borderTopColor: 'grey'
      },
      indicatorStyle: {
        height: 0
      },
      showLabel: false,
      showIcon: true
    }
  });

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });