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

import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  Text,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {AppButton} from './AppButton';

const currentDate = new Date();

export const AddEntryScreen = ({navigation}) => {
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
    <SafeAreaView
      testID="addEntryForm"
      style={{
        margin: 10,
      }}>
      <Pressable style={styles.row} onPress={toggleDatePickerVisibility}>
        <Text style={styles.label}>Date</Text>
        <Text testID="dateText" style={styles.input} editable={false}>
          {date.toLocaleDateString()}
        </Text>
      </Pressable>

      {isDatePickerVisible ? (
        <DatePicker
          testID="dateInput"
          label="Date"
          mode="date"
          date={date}
          onDateChange={setDate}
        />
      ) : null}

      <View style={styles.row}>
        <Text style={styles.label}>Odometer</Text>
        <TextInput
          testID="odometerInput"
          style={styles.input}
          label="Odometer"
          keyboardType="decimal-pad"
          value={odometer.toString()}
          onChangeText={setOdometer}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          testID="fuelAmountInput"
          style={styles.input}
          label="Fuel Amount"
          keyboardType="decimal-pad"
          value={amount.toString()}
          onChangeText={amount => {
            setAmount(amount);
            recalculateTotalPrice();
          }}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          testID="fuelPriceInput"
          style={styles.input}
          label="Fuel Price (per L)"
          keyboardType="decimal-pad"
          value={price.toString()}
          onChangeText={price => {
            setPrice(price);
            recalculateTotalPrice();
          }}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Total</Text>
        <TextInput
          testID="totalPriceInput"
          style={styles.input}
          label="Total Price"
          keyboardType="decimal-pad"
          value={total.toString()}
          editable={false}
        />
      </View>

      <AppButton
        testID="saveEntryButton"
        title="Save"
        accessibilityLabel="Save this entry to the log."
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 8,
  },
  label: {
    flex: 2,
    padding: 2,
    margin: 2,
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    flex: 3,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 24,
    fontFamily: 'courier',
    textAlign: 'right',
  },
});
