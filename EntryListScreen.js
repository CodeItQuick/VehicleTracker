import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Button,
  Text,
  View
} from 'react-native';
import { AppButton } from './AppButton';

export const EntryListScreen = ({ navigation }) => {
  const emptyData = [];

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
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        testID="entriesList"
        data={emptyData}
        ListEmptyComponent={listEmptyComponent}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
      <AppButton
        testID="addEntryButton"
        onPress={() => navigation.navigate('Add Entry')}
        title="Add Entry"
        accessibilityLabel="Add an entry to the log." />
    </SafeAreaView>
  );
};
