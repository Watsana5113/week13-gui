import React from'react'
import { View } from 'react-native'

import ProfileScreen from'./scveens/ProfileScreen'
import  DetailsScreen from'./scveens/DetailsScreen'
import HomeScreen from './scveens/HomeScreen'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigtor} from '@react-navigation/stack'

const AppStack = createStackNavigtor()

const App=()=>{
  return(
    <NavigationContaine>
     <AppStack.Navigator>
       <AppStack.Screen name="Home"component={HomeScreen} />
     </AppStack.Navigator>
    </NavigationContaine>

  )
}
export default App