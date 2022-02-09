import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { gameActions } from '@store/gameControl';

import { Home } from '../screens/Home';
import { NewBet } from '../screens/NewBet';
import { UpdateMyUser } from '../screens/UpdateMyUser';
import { Account } from '../screens/Account';
import { Cart } from '../screens/Cart';

import { HeaderButton } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Game({navigation}: any) {
  const dispatch = useDispatch();

  function onLogin() {
    dispatch(gameActions.cleanCart());
    navigation.navigate('Login')
  }

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'Home':
                return <Ionicons name={'home'} size={size} color={color} />
              case 'NewBet':
                return <MaterialIcons name="library-add" size={size} color={color} />
              case 'Cart':
                  return <Ionicons name={'cart'} size={size+4} color={color} />
              case 'Account':
                return <Ionicons name={'person-circle'} size={size+4} color={color} />
              default:
                return <Ionicons name={'close-circle-sharp'} size={size} color={color} />
            }
          },
          tabBarInactiveTintColor: '#707070',
          tabBarActiveTintColor: '#B5C401',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'WorkSans_600SemiBold',
          },
          headerTitle: 'TGL',
          headerTitleStyle: {
            paddingTop: 14,
            fontFamily: 'WorkSans_600SemiBold_Italic',
            color: '#4b4b4b',
            fontSize: 29,
            borderBottomColor: '#b5c401',
            borderBottomWidth: 5,
            borderRadius: 3,
          },
          headerRight: () => (<HeaderButton onClick={onLogin}/>)
        })} 
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Tab.Screen name="NewBet" component={NewBet} options={{ title: 'New Bet'}}/>
        <Tab.Screen name="Cart" component={Cart} options={{ title: 'Cart' }}/>
        <Tab.Screen name="Account" component={Profile} options={{ title: 'Account' }}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

function Profile() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="UpdateMyUser" component={UpdateMyUser}  options={{ headerShown: false }}/>
        <Stack.Screen name="Account" component={Account}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Game;