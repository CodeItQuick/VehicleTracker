import React, { useState } from 'react';
import {
  TextInput,
  SafeAreaView,
  Text,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';

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
    <SafeAreaView
      testID="addEntryForm"
      style={{
        margin: 10,
      }}>

      <Pressable style={styles.row} onPress={toggleDatePickerVisibility}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          testID="dateText"
          style={styles.input}
          value={date.toLocaleDateString()}
          editable={false} />
      </Pressable>

      {isDatePickerVisible ?
        <DatePicker
          testID="dateInput"
          label="Date"
          mode="date"
          date={date}
          onDateChange={setDate} />
        : null}

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
          onChangeText={(amount) => {
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
          onChangeText={(price) => {
            setPrice(price);
            recalculateTotalPrice();
          }} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Total</Text>
        <TextInput
          testID="totalPriceInput"
          style={styles.input}
          label="Total Price"
          keyboardType="decimal-pad"
          value={total.toString()}
          editable={false} />
      </View>

      <Pressable
        onPress={() => navigation.goBack()}
        accessibilityLabel="Save this entry to the log.">
        <LinearGradient
          colors={['#35b6d6', '#358bd6', '#075396']}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Save</Text>
        </LinearGradient>
      </Pressable>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 8,
  },
  label: {
    flex: 2,
    padding: 2,
    margin: 2,
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    flex: 3,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 24,
    fontFamily: "courier",
    textAlign: "right",
  },
  buttonGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});