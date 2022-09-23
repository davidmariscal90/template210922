import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useSelector } from '../store/reducers';
import AuthStack, { AuthStackParamList } from './auth/AuthStack';
import BottomTabNav, { HomeTabParamList } from './main/BottomTabNav'
import HomeTab from './main/HomeTab';

export type rootStackParamList = {
    AuthStack: undefined;
    HomeTab: undefined,
    StoryTaker: undefined,
    Direct: undefined,
};
export type commonParamList =  AuthStackParamList & HomeTabParamList & rootStackParamList
const RootTab = createMaterialTopTabNavigator<rootStackParamList>()
const index = (): JSX.Element => {
    const user = useSelector(state => state.user)
    const navigationOptions: MaterialTopTabNavigationOptions = {
    }
    const tabBarOptions = {
        indicatorContainerStyle: {
            display: 'none'
        },
        tabStyle: {
            display: 'none'
        }
    }
    const logined = !!user?.user?.userInfo
    return (
        <RootTab.Navigator
            initialRouteName={logined ? 'HomeTab' : 'AuthStack'}
            screenOptions={navigationOptions}
            tabBarOptions={tabBarOptions}
            >
            {!logined &&
                <RootTab.Screen name="AuthStack" component={AuthStack} />
            }
            {logined &&
                <>
                    <RootTab.Screen name="HomeTab" component={HomeTab} />
                </>
            }

        </RootTab.Navigator>
    )
}
export default index

