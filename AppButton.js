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
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const AppButton = (props) => {
  return (
    <Pressable
      testID={props.testID}
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
