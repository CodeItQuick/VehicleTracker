/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView, // FIXME: I think this is iOS specific
  FlatList,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const EMPTY_DATA = [];

const App: () => Node = () => {
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

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList
        testID="entriesList"
        data={EMPTY_DATA}
        ListEmptyComponent={listEmptyComponent}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        testID="addEntryButton"
        onPress={() => {}}
        title="Add Entry"
        accessibilityLabel="Add an entry to the log."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
