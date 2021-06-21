import React, { useState } from 'react';
import {
  Button,
  TextInput,
  SafeAreaView,
  Text,
  Pressable
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const currentDate = new Date();

export const AddEntryScreen = ({ navigation }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [odometer, setOdometer] = useState(new Number());
  const [amount, setAmount] = useState(new Number());
  const [price, setPrice] = useState(new Number());
  const [total, setTotal] = useState(new Number());

  const recalculateTotalPrice = () => {
    setTotal((amount * price).toFixed(2));
  };

  const toggleDatePickerVisibility = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };
  const currentDate = new Date();

  return (
    <SafeAreaView testID="addEntryForm">
      <Pressable onPress={toggleDatePickerVisibility}>
        <Text testID="dateLabel">Date</Text>
        <Text testID="dateText">{date.toISOString()}</Text>
      </Pressable>
      {isDatePickerVisible ?
        <DatePicker
          testID="dateInput"
          label="Date"
          mode="date"
          date={date}
          onDateChange={setDate} />
        : null}

      <Text>Odometer</Text>
      <TextInput
        testID="odometerInput"
        label="Odometer"
        keyboardType="decimal-pad"
        value={odometer.toString()}
        onChangeText={setOdometer} />

      <Text>Amount</Text>
      <TextInput
        testID="fuelAmountInput"
        label="Fuel Amount"
        keyboardType="decimal-pad"
        value={amount.toString()}
        onChangeText={(amount) => {
          setAmount(amount);
          recalculateTotalPrice();
        }} />

      <Text>Price</Text>
      <TextInput
        testID="fuelPriceInput"
        label="Fuel Price (per L)"
        keyboardType="decimal-pad"
        value={price.toString()}
        onChangeText={(price) => {
          setPrice(price);
          recalculateTotalPrice();
        }} />

      <Text>Total</Text>
      <TextInput
        testID="totalPriceInput"
        label="Total Price"
        keyboardType="decimal-pad"
        value={total.toString()}
        editable={false} />

      <Button
        onPress={() => navigation.goBack()}
        title="Save"
        accessibilityLabel="Save this entry to the log." />
    </SafeAreaView>
  );
};
