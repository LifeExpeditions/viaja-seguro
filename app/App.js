import React from 'react';
//! 'react-native-gesture-handler' Es  importante importa en la cabecera para que React navigate Funcione
import 'react-native-gesture-handler';
import {Root} from 'native-base';
//** Componentes de react Navigate
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Verifique from './views/Verifique/Verifique';

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Verifique">
          <Stack.Screen
            name="Verifique"
            component={Verifique}
            options={{
              title: 'Verificar Web',
              headerShown: false,
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
