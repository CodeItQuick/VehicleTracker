import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Button,
  Text,
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
  return <Text>This is the add entry screen</Text>;
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
