import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import LoginPage from '../../screens/Auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';
import SignInPage from '../../pages/auth/SignInPage';
import ForgotPasswordPage from '../../pages/auth/ForgotPasswordPage';
import COLORS from '../../styles/theme';
import HeaderTitle from '../../components/HeaderTitle';
import Register from '../../screens/Auth/Register';

const Stack = createNativeStackNavigator();

interface IAuthStackProps {
    /**title: string,
    goToProfile: (event: GestureResponderEvent) => void,
    goBack: (event: GestureResponderEvent) => void,
    addPitch?: (event: GestureResponderEvent) => void,*/
    navigation: StackNavigationProp<any, any>,
    //user: any
}

const AuthStack: React.FC<IAuthStackProps> = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name="LoginScreen" component={LoginPage} options={AuthHeaderstyles} />
            <Stack.Screen name="RegisterScreen" component={Register} options={loginHeaderstyles("Register")} />
            <Stack.Screen name="SignInScreen" component={SignInPage} options={loginHeaderstyles("Sign In")} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordPage} options={loginHeaderstyles("Forgot Password")} />
        </Stack.Navigator>

    )
};

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

export default AuthStack;