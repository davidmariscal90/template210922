import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { navigationRef } from './rootNavigation';

export type SuperRootStackParamList = {
    RootTab: undefined
}

const RootStack = createStackNavigator<SuperRootStackParamList>()
const index = (): JSX.Element => {
const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {}}
}; 
export default index



//00D86C  1F7BE7
//83F1BA  FFFFFF