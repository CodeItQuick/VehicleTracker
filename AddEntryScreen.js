import React from 'react';
import {
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const AddEntryScreen = ({ navigation }) => {
  return (
    <SafeAreaView testID="addEntryForm">
      <DatePicker
        testID="dateInput"
        label="Date"
        mode="datetime"
        date={new Date()} />
      <TextInput
        testID="odometerInput"
        label="Odometer"
        keyboardType="decimal-pad"
        autoCapitalize="none" />
      <TextInput
        testID="fuelAmountInput"
        label="Fuel Amount(L)"
        keyboardType="decimal-pad"
        autoCapitalize="none" />
      <TextInput
        testID="fuelPriceInput"
        label="Fuel Price (per L)"
        keyboardType="decimal-pad"
        autoCapitalize="none" />
      <TextInput
        testID="totalPriceInput"
        label="Total Price"
        keyboardType="decimal-pad"
        autoCapitalize="none" />
      <Button
        onPress={() => navigation.goBack()}
        title="Save"
        accessibilityLabel="Save this entry to the log." />
    </SafeAreaView>
  );
};
