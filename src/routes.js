import React, { useEffect } from 'react';
import { TouchableOpacity, Text, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import About from './pages/about';

const Stack = createStackNavigator();

export default function RotaInicial() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F00',
          },
          headerTintColor: '#FFF',
          fontWeight: 'bold',
        }}>
        <Stack.Screen
          name="Home"
          component={Main}
          options={({ navigation }) => ({
            title: 'pGO Sniper',
            // eslint-disable-next-line react/display-name
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
                  Sobre{'   '}
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
