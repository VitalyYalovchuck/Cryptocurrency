/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './src/screens/login/LoginScreen';
import {CurrencyScreen} from './src/screens/currency/CurrencyScreen';
import {SelectedCurrencyScreen} from './src/screens/selectedCurrency/SelectedCurrencyScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Currency"
          component={CurrencyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectedCurrency"
          component={SelectedCurrencyScreen}
          options={() => ({
            title: '',
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
