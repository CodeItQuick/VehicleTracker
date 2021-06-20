import React from 'react';
import {
  Button, TextInput,
  View
} from 'react-native';

export const AddEntryScreen = ({ navigation }) => {
  return (
    <View testID="addEntryForm">
      <TextInput
        testID="dateInput"
        label="Date"
        autoCapitalize="none" />
      <TextInput
        testID="odometerInput"
        label="Odometer"
        autoCapitalize="none" />
      <TextInput
        testID="fuelAmountInput"
        label="Fuel Amount(L)"
        autoCapitalize="none" />
      <TextInput
        testID="fuelPriceInput"
        label="Fuel Price (per L)"
        autoCapitalize="none" />
      <TextInput
        testID="totalPriceInput"
        label="Total Price"
        autoCapitalize="none" />
      <Button
        onPress={() => navigation.goBack()}
        title="Save"
        accessibilityLabel="Save this entry to the log." />
    </View>
  );
};
