import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../../pages/main/ProfilePage';
import { StackNavigationProp } from '@react-navigation/stack';
import { headerStyles } from '../../utils/Utils';

const Stack = createNativeStackNavigator();

interface IProfileStackProps {
  /**title: string,
  goToProfile: (event: GestureResponderEvent) => void,
  goBack: (event: GestureResponderEvent) => void,
  addPitch?: (event: GestureResponderEvent) => void,*/
  navigation: StackNavigationProp<any, any>,
  user: any
}

const ProfileStack: React.FC<IProfileStackProps> = (): ReactElement => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfilePage} options={headerStyles("My Profile")} />
    </Stack.Navigator>

  )
};


export default ProfileStack;