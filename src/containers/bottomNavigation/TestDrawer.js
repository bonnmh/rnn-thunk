import React, { Component } from "react";
import {
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  BackHandler,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { PanGestureHandler } from "react-native-gesture-handler";
const widthD = Dimensions.get("window").width;
const heightD = Dimensions.get("window").height;
import * as Animatable from "react-native-animatable";
import Header from "../headerYellow";
class TestDrawer extends Component {
  static options(passprops) {
    return {
      topBar: {
        title: {
          text: passprops.text,
          color: "white"
        },
        visible: false,
        drawBehind: true,
        background: {
          color: "green",
          translucent: false
        },
        animate: false
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleDrawer: false,
      keyFrames: {
        from: { translateX: 1000 },
        to: { translateX: 0 }
      }
    };
  }

  dismissNotification() {
    this.setState({
      keyFrames: {
        from: { translateY: 0 },
        to: { translateY: 1000 }
      }
    });
    setTimeout(() => {
      Navigation.dismissOverlay(this.props.componentId);
    }, 1000);

    /* Very important to set, otherwise this.timeout will try to run after dismissOverlay has run */
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);

    this.timeout = setTimeout(() => {
      this.setState({
        keyFrames: {
          from: { translateY: 0 },
          to: { translateY: 1000 }
        }
      });
      setTimeout(() => {
        Navigation.dismissOverlay(this.props.componentId);
      }, 1000);
    }, 5000);
  }
  handleBackPress = () => {
    Navigation.pop(this.props.componentId);
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2  }}>
          <TouchableOpacity
            onPress={() => {
              Navigation.dismissOverlay(this.props.componentId);
            }}
            style = {{flex :1}}
          />
        </View>
        <View style={{ flex: 8 }}>
          <PanGestureHandler
            onGestureEvent={this.dismissNotification}
            minOffsetY={-20}
          >
            <Animatable.View
              duration={500}
              useNativeDriver={true}
              animation={this.state.keyFrames}
              style={{ flex: 1, backgroundColor: "red" }}
            >
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  Navigation.dismissOverlay(this.props.componentId);
                  console.log(this.props.componentId);
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  back
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </PanGestureHandler>
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
)(TestDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginLeft: 0 * widthD,
    height: heightD,
    flexDirection: "row"
  }
});

// const pushAnimations = {
//   content: {
//     x: {
//       from: 1000,
//       to: 0,
//       duration: 400
//       // interpolation: 'accelerate'
//     }
//   }
// };
// const popAnimations = {
//   content: {
//     x: {
//       from: 0,
//       to: 1000,
//       duration: 400,
//       interpolation: "accelerate"
//     }
//   }
// };

// const defautOptions = {
//   animations: {
//     push: pushAnimations,
//     pop: popAnimations
//   }
// };
// Navigation.setDefaultOptions(defautOptions);

{
  /* <Header
          Back={this.handleBackPress}
          Title="Màn hình test"
          MenuTitle="TEST"
          Menu={()=>{
            
          }}
        /> */
}
{
  /* <TouchableOpacity
          onPress={() => {
            Navigation.dismissOverlay(this.props.componentId);
            console.log(this.props.componentId);
          }}
          style={{ flex: 1 , alignItems : 'center' , justifyContent : 'center' }}
        >
          <Text style={{ color: "white"  , fontSize : 20 , fontWeight : 'bold'}}>back</Text>
        </TouchableOpacity> */
}
