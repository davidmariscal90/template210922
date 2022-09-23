
import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import MainStack from './MainStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';
import COLORS from '../../styles/theme';
import { Image, StyleSheet, View } from 'react-native';
import IMAGES from '../../store/Images';

interface IBottomTabNavProps {
}

Icon.loadFont();

const Tab = createBottomTabNavigator();

interface IProps {

}

export type HomeTabParamList = {
  HomeIndex: undefined,
  Explore: undefined,
  Creator: undefined,
  Activity: undefined,
  Account: undefined,
  Follow: {
      type: 1 | 2
  }
};

const BottomTabNav: React.FC<IBottomTabNavProps> = (): ReactElement => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name="home" size={26} color={color} />
        )
      }} />
      <Tab.Screen name="Search" component={SearchStack} options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name="search" size={26} color={color} />
        )
      }} />
      <Tab.Screen name="Main" component={MainStack} options={{
        tabBarIcon: ({ color, focused }) => (
          !focused ?
            <View style={styles.mainLogo}><Image source={IMAGES.DENDA_TAB_BOTTOM_ICON} style={{ width: 48, height: 48 }} /></View> :
            <View style={styles.mainLogo}><Image source={IMAGES.DENDA_TAB_BOTTOM_ICON_FOCUSED} style={{ width: 48, height: 48 }} /></View>
        ),
      }} />
      <Tab.Screen name="Notification" component={NotificationStack} options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name="bell" size={26} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{
        tabBarIcon: ({ color, focused }) => (
          <Icon name="user" size={26} color={color} />
        )
      }} />
    </Tab.Navigator >
  );
};


const tabBarOptions: any = {
  tabBarActiveTintColor: COLORS.DARKGRAY, // active icon color
  tabBarInactiveTintColor: COLORS.LABELGRAY, // inactive icon color    showLabel: false,
  tabBarShowIcon: true,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.WHITE,
  },
};

const styles = StyleSheet.create({
  mainLogo: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 60
  }

});

export default BottomTabNav;


//options={{tabBarIcon: (tintColor) => <Icon name="home" size={26} color={tintColor} />}} />