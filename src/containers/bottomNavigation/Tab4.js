import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Navigation } from "react-native-navigation";
import HeaderYellow from "../headerYellow";
const heightD = Dimensions.get("window").height;
class Tab4 extends Component {
  static options(passprops) {
    console.log(passprops);
    return {
      topBar: {
        title: {
          text: passprops.text,
          color: passprops.color,
          fontSize: passprops.fontSize
        },
        visible: false,
        drawBehind: true,
        background: {
          color: "red",
          translucent: false
        },
        animate: false
      
      }
    };
  }
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted

  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    Navigation.pop(this.props.componentId);
    return true;
  };
  render() {
    return (
      <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      
        
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
)(Tab4);
