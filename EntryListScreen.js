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
