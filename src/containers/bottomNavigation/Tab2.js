// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   BackHandler,
//   Button,
//   StyleSheet,
//   NativeEventEmitter, NativeModules, Platform
// } from "react-native";
// import { connect } from "react-redux";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import { Navigation } from "react-native-navigation";

// import Geolocation from "react-native-geolocation-service";

// class Tab2 extends Component {
//   static options(passprops) {
//     return {
//       topBar: {
//         title: {
//           text: passprops.text,
//           color: "white"
//         },
//         visible: false,
//         drawBehind: true,
//         background: {
//           color: "grey",
//           translucent: false
//         }
//       }
//     };
//   }
//   constructor(props) {
//     super(props);
//     Navigation.events().bindComponent(this);

//     this.state = {
//       loading: false,
//       updatesEnabled: false,
//       location: {},
//       check: false,
//       flag: true,
//       CheckDiemDanh: "Chưa điểm danh",
//       visibleOnPress: false
//     };
//   }

//   componentDidMount() {
//     BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
//   }

//   componentWillUnmount() {
//     BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
//   }

//   navigationButtonPressed({ buttonId }) {
//     switch (buttonId) {
//       case "backPress": {
//         this.handleBackPress();
//         break;
//       }
//     }
//   }

//   handleBackPress = () => {
//     Navigation.popTo("Init");
//   };

//   watchId = null;

//   hasLocationPermission = async () => {
//     if (
//       Platform.OS === "ios" ||
//       (Platform.OS === "android" && Platform.Version < 23)
//     ) {
//       return true;
//     }

//     const hasPermission = await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     );

//     if (hasPermission) return true;

//     const status = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     );

//     if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

//     if (status === PermissionsAndroid.RESULTS.DENIED) {
//       ToastAndroid.show(
//         "Location permission denied by user.",
//         ToastAndroid.LONG
//       );
//     } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//       ToastAndroid.show(
//         "Location permission revoked by user.",
//         ToastAndroid.LONG
//       );
//     }
//     return false;
//   };

//   getLocation = async () => {
//     const hasLocationPermission = await this.hasLocationPermission();

//     if (!hasLocationPermission) return;

//     this.setState({ loading: true }, () => {
//       Geolocation.getCurrentPosition(
//         position => {
//           this.setState({ location: position, loading: false });
//           console.log(position);
//         },
//         error => {
//           this.setState({ location: error, loading: false });
//           console.log(error);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 15000,
//           maximumAge: 10000,
//           distanceFilter: 50
//         }
//       );
//     });
//   };

//   getLocationUpdates = async () => {
//     const hasLocationPermission = await this.hasLocationPermission();

//     if (!hasLocationPermission) return;

//     this.setState({ updatesEnabled: true }, () => {
//       this.watchId = Geolocation.watchPosition(
//         position => {
//           this.setState({ location: position });
//           console.log(position);
//         },
//         error => {
//           this.setState({ location: error });
//           console.log(error);
//         },
//         {
//           enableHighAccuracy: true,
//           distanceFilter: 0,
//           interval: 5000,
//           fastestInterval: 2000
//         }
//       );
//     });
//   };

//   removeLocationUpdates = () => {
//     if (this.watchId !== null) {
//       Geolocation.clearWatch(this.watchId);
//       this.setState({ updatesEnabled: false });
//     }
//   };

//   render() {
//     const { loading, location, updatesEnabled } = this.state;
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttons}>
//           <Button
//             title="Start Observing"
//             onPress={this.getLocationUpdates}
//             disabled={updatesEnabled}
//             color="#E6BC27"
//           />
//           <Button
//             title="Stop Observing"
//             onPress={this.removeLocationUpdates}
//             disabled={!updatesEnabled}
//             color="#E6BC27"
//           />
//         </View>

//         <View style={styles.result}>
//           <Text>{JSON.stringify(location.coords, null, 4)}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {};
// }
// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Tab2);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//     paddingHorizontal: 12
//   },
//   result: {
//     borderWidth: 1,
//     borderColor: "#666",
//     width: "100%",
//     paddingHorizontal: 16
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     marginVertical: 12,
//     width: "100%"
//   }
// });
import React, { Component } from "react";
import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from "react-native";
import Geolocation from "react-native-geolocation-service";

import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Navigation } from "react-native-navigation";

class Tab2 extends Component {
  static options(passprops) {
    return {
      topBar: {
        title: {
          text: passprops.text,
          color: "white"
        },
        visible: true,
        drawBehind: true,
        background: {
          color: "green",
          translucent: true
        }
      }
    };
  }
  watchId = null;

  state = {
    loading: false,
    updatesEnabled: false,
    location: {}
  };

  hasLocationPermission = async () => {
    if (
      Platform.OS === "ios" ||
      (Platform.OS === "android" && Platform.Version < 23)
    ) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        "Location permission denied by user.",
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Location permission revoked by user.",
        ToastAndroid.LONG
      );
    }

    return false;
  };

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({ location: position, loading: false });
          console.log(position);
        },
        error => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 50,
          forceRequestLocation: true
        }
      );
    });
  };

  getLocationUpdates = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ updatesEnabled: true }, () => {
      this.watchId = Geolocation.watchPosition(
        position => {
          this.setState({ location: position });
          console.log(position);
        },
        error => {
          this.setState({ location: error });
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000
        }
      );
    });
  };

  removeLocationUpdates = () => {
    if (this.watchId !== null) {
      Geolocation.clearWatch(this.watchId);
      this.setState({ updatesEnabled: false });
    }
  };

  render() {
    const { loading, location, updatesEnabled } = this.state;
    return (
      <View style={styles.container}>
        <Button
          title="Get Location"
          onPress={this.getLocation}
          disabled={loading || updatesEnabled}
        />
        <View style={styles.buttons}>
          <Button
            title="Start Observing"
            onPress={this.getLocationUpdates}
            disabled={updatesEnabled}
          />
          <Button
            title="Stop Observing"
            onPress={this.removeLocationUpdates}
            disabled={!updatesEnabled}
          />
        </View>

        <View style={styles.result}>
          <Text>{JSON.stringify(location, null, 4)}</Text>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 12
  },
  result: {
    borderWidth: 1,
    borderColor: "#666",
    width: "100%",
    paddingHorizontal: 16
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 12,
    width: "100%"
  }
});
