import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login'
import { Registration } from '../screens/Registration';
import { ResetPassword } from '../screens/ResetPassword';
import { ChangePassword } from '../screens/ChangePassword';

const Stack = createNativeStackNavigator();

export function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password' }}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: 'Reset Password' }}/>
        <Stack.Screen name="Registration" component={Registration} options={{ title: 'Registration' }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Authentication' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}