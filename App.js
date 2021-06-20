import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView, // FIXME: I think this is iOS specific
  FlatList,
  Button,
  Text,
  View,
} from 'react-native';

//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const EMPTY_DATA = [];

const EntryListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
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

const App: () => Node = () => {
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
