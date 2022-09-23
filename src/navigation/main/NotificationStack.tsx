import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationPage from '../../pages/main/NotificationPage';
import { StackNavigationProp } from '@react-navigation/stack';
import { headerStyles } from '../../utils/Utils';

const Stack = createNativeStackNavigator();

interface INotificationStackProps {
  /**title: string,
  goToProfile: (event: GestureResponderEvent) => void,
  goBack: (event: GestureResponderEvent) => void,
  addPitch?: (event: GestureResponderEvent) => void,*/
  navigation: StackNavigationProp<any, any>,
  user: any
}

const NotificationStack: React.FC<INotificationStackProps> = (): ReactElement => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationScreen" component={NotificationPage} options={headerStyles("Notifications")} />
    </Stack.Navigator>

  )
};


export default NotificationStack;