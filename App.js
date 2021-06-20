import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const EMPTY_DATA = [];

const EntryListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  const listEmptyComponent = () => {
    return (
      <View>
        <Text>There are no entries.</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        testID="entriesList"
        data={EMPTY_DATA}
        ListEmptyComponent={listEmptyComponent}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        testID="addEntryButton"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        title="Add Entry"
        accessibilityLabel="Add an entry to the log."
      />
    </SafeAreaView>
  );
};

const AddEntryScreen = ({ navigation }) => {
  return (
    <View testID="addEntryForm">
      <TextInput
        testID="dateInput"
        label="Date"
        autoCapitalize="none"
      />
      <TextInput
        testID="odometerInput"
        label="Odometer"
        autoCapitalize="none"
      />
      <TextInput
        testID="fuelAmountInput"
        label="Fuel Amount(L)"
        autoCapitalize="none"
      />
      <TextInput
        testID="fuelPriceInput"
        label="Fuel Price (per L)"
        autoCapitalize="none"
      />
      <TextInput
        testID="totalPriceInput"
        label="Total Price"
        autoCapitalize="none"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Save"
        accessibilityLabel="Save this entry to the log."
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entries"
          component={EntryListScreen}
          options={{ title: 'Entries' }}
        />
        <Stack.Screen name="Profile" component={AddEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
