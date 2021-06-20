import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Button,
  Text,
  View
} from 'react-native';

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
      <Button
        testID="addEntryButton"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        title="Add Entry"
        accessibilityLabel="Add an entry to the log." />
    </SafeAreaView>
  );
};
