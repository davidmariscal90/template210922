import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../pages/main/HomePage';
import { StackNavigationProp } from '@react-navigation/stack';
import { headerStyles } from '../../utils/Utils';

const Stack = createNativeStackNavigator();

interface IHomeStackProps {
  /**title: string,
  goToProfile: (event: GestureResponderEvent) => void,
  goBack: (event: GestureResponderEvent) => void,
  addPitch?: (event: GestureResponderEvent) => void,*/
  navigation: StackNavigationProp<any, any>,
  user: any
}

const HomeStack: React.FC<IHomeStackProps> = (): ReactElement => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomePage} options={headerStyles("Home")} />
    </Stack.Navigator>

  )
};

export default HomeStack;