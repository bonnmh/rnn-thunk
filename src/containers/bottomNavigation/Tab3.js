import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  Image
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderYellow from "../headerYellow";
import { Navigation } from "react-native-navigation";
import Toast from "../../Uitls/Toast";
const data = ["A", "B", "C", "D", "E", "F"];
const heightD = Dimensions.get("window").height;
class Tab3 extends Component {
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
          color: "blue",
          translucent: true
        },

        animate: false
      }
    };
  }
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    Navigation.mergeOptions("Tab3", {
      sideMenu: {
        // right: {
        //   component: {
        //     id: "Tab2", // Optional, Auto generated if empty
        //     name: "Tab2",
        //     options: {},
        //     passProps: {
        //       text: "This text will be available in your component.props"
        //     }
        //   },
        //   visible: true
        // }
      }
    });
  }
  onRefresh() {
    Toast.show("OK rồi");
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case "backPress": {
        this.handleBackPress();
        break;
      }
    }
  }
  menu_ = () => {
    Navigation.showOverlay({
      component: {
        name: "TestDrawer",
        componentId: "OK",
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };

  handleBackPress = () => {
    //Custom logic

    //Go back if required
    Navigation.pop(this.props.componentId);
    //Stop the default navigation
    return true;
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1  , flexDirection : 'column'}}>
        <View style={{ flex: 1 }}>
          <HeaderYellow
            Back={this.handleBackPress}
            Title="Màn hình 3"
            MenuTitle="Menu"
            Menu={this.menu_}
          />
          <Text>AHDH</Text>
        </View>
        <View style={{ flex: 10  , backgroundColor : '#9D9D9D'}}>
         
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
)(Tab3);

const pushAnimations = {
  content: {
    x: {
      from: 300,
      to: 0,
      duration: 400,
      interpolation: "accelerate"
    }
  }
};
const popAnimations = {
  content: {
    x: {
      from: 0,
      to: 300,
      duration: 400,
      interpolation: "accelerate"
    }
  }
};

const defautOptions = {
  animations: {
    push: pushAnimations,
    pop: popAnimations
  }
};
Navigation.setDefaultOptions(defautOptions);
