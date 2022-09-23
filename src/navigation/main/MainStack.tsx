import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../../pages/main/MainPage';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

interface IMainStackProps {
  /**title: string,
  goToProfile: (event: GestureResponderEvent) => void,
  goBack: (event: GestureResponderEvent) => void,
  addPitch?: (event: GestureResponderEvent) => void,*/
  navigation: StackNavigationProp<any, any>,
  user: any
}

const MainStack: React.FC<IMainStackProps> = (): ReactElement => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainPage} />
    </Stack.Navigator>

  )
};


export default MainStack;