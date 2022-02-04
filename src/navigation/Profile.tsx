import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Account } from '../screens/Account';
import { UpdateMyUser } from '../screens/UpdateMyUser';

const Stack = createNativeStackNavigator();

export function Profile() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Account" component={Account} options={{ title: 'Account' }}/>
        <Stack.Screen name="UpdateMyUser" component={UpdateMyUser} options={{ title: 'Update My User' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}