# VehicleTracker

VehicleTracker is a mobile application for tracking details about your
vehicles.

Theoretically, it should run on both iOS and Android, but it's currently only
tested on iOS.  If you try to run it on Android and it doesn't work, please
feel free to fix that.

## Development

VehicleTracker is a ReactNative application.

First, install the dependencies:

    yarn
    pod install --project-directory=ios

Next, start the react-native app:

    yarn start

Finally, run the app:

    yarn ios

### Running the Tests

The e2e tests are written using [Detox](https://github.com/wix/Detox).

To run them, you first need to build for testing:

    detox build --configuration=ios

Then run them:

    detox test --configuration=ios

## License

VehicleTracker is a mobile app for tracking details about your vehicles.
Copyright (C) 2021  Steven R. Baker <steven@stevenrbaker.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
