import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import HeaderTitle from '../../components/HeaderTitle'
import LoginPage from '../../screens/Auth/LoginPage'
import ForgotPassword from '../../screens/Auth/ForgotPassword'
import Login from '../../screens/Auth/Login'
import Register from '../../screens/Auth/Register'
import Welcome, { WelcomePropsRouteParams } from '../../screens/Auth/Welcome'
import COLORS from '../../styles/theme'
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    Welcome: WelcomePropsRouteParams;
};
const Stack = createStackNavigator<AuthStackParamList>()
const AuthStack = () => {
    const navigationOptions: StackNavigationOptions = {
        //headerShown: false,
        gestureEnabled: false
    }
    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen component={Login} name='Login' options={AuthHeaderstyles}/>
            <Stack.Screen component={Register} name="Register" options={loginHeaderstyles("Register")} />
            <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
            <Stack.Screen component={Welcome} name="Welcome" />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})


const AuthHeaderstyles: any = (title: string) => {
    {
        return {
            headerShown: false
        }
    }
}

export const loginHeaderstyles: any = (title: string) => {
    {
        return {
            headerStyle: {
                backgroundColor: COLORS.PRIMARY,
                elevation: 0,
                shadowOpacity: 0,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
            },
            headerTintColor: COLORS.WHITE,
            headerBackTitle: 'Back',
            headerTitleStyle: {
                color: COLORS.WHITE,
            },
            headerTitle: () => (<HeaderTitle title={title} />),
        }
    }
}

