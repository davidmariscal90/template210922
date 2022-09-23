import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from '../../pages/main/SearchPage';
import { StackNavigationProp } from '@react-navigation/stack';
import SearchTabsPage from '../../pages/main/SearchTabsPage';

const Stack = createNativeStackNavigator();

interface ISearchStackProps {
  navigation: StackNavigationProp<any, any>,
  user: any
}

const SearchStack: React.FC<ISearchStackProps> = (): ReactElement => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchTabsPage} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
};


export default SearchStack;