import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const AppButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}>
      <LinearGradient
        colors={['#35b6d6', '#358bd6', '#075396']}
        style={styles.buttonGradient}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
