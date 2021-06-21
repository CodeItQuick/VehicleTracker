//
// Copyright (c) 2021 Steven R. Baker <steven@stevenrbaker.com>
//
// This file is part of VehicleTracker.
//
// VehicleTracker is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// VehicleTracker is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with VehicleTracker.  If not, see <https://www.gnu.org/licenses/>.
//

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
        />
        <Stack.Screen name="Add Entry" component={AddEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
