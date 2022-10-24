import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Pantalla2 from './src/screens/Pantalla2';
import Pantalla3m from './src/screens/Pantalla3m';
import Pantalla4m from './src/screens/Pantalla4m';
import Pantalla5m from './src/screens/Pantalla5m';
import Pantalla6m from './src/screens/Pantalla6m';
import Pantalla7m from './src/screens/Pantalla7m';
import Pantalla8m from './src/screens/Pantalla8m';
import Pantalla9m from './src/screens/Pantalla9m';
import PantallaFinal from './src/screens/PantallaFinal';
import Pantalla3h from './src/screens/Pantalla3h';
import Pantalla4h from './src/screens/Pantalla4h';
import Pantalla5h from './src/screens/Pantalla5h';
import Pantalla6h from './src/screens/Pantalla6h';
import Pantalla7h from './src/screens/Pantalla7h';
import Pantalla8h from './src/screens/Pantalla8h';
import Pantalla9h from './src/screens/Pantalla9h';
import Pantalla10h from './src/screens/Pantalla10h';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla2'
          component={Pantalla2}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla3m'
          component={Pantalla3m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla4m'
          component={Pantalla4m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla5m'
          component={Pantalla5m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla6m'
          component={Pantalla6m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla7m'
          component={Pantalla7m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla8m'
          component={Pantalla8m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla9m'
          component={Pantalla9m}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='PantallaFinal'
          component={PantallaFinal}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla3h'
          component={Pantalla3h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla4h'
          component={Pantalla4h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla5h'
          component={Pantalla5h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla6h'
          component={Pantalla6h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla7h'
          component={Pantalla7h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla8h'
          component={Pantalla8h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla9h'
          component={Pantalla9h}
          options= {{
            
          }}
        />
        <Stack.Screen
          name='Pantalla10h'
          component={Pantalla10h}
          options= {{
            
          }}
        />

      

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
