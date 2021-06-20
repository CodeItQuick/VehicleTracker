import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddEntryScreen } from './AddEntryScreen';
import { EntryListScreen } from './EntryListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entries"
          component={EntryListScreen}
          options={{ title: 'Entries' }}
        />
        <Stack.Screen name="Add Entry" component={AddEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
