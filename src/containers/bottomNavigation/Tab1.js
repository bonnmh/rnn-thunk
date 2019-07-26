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
class Tab1 extends Component {
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
        // rightButtons: [
        //   {
        //     id: "buttonRight",
        //     icon: require("../../assets/images/a4.jpg")
        //   }
        // ]
        // leftButtons: [
        //   {
        //     id: "buttonLeft",
        //     icon: require("../../assets/images/a4.jpg")
        //   }
        // ]
      }
    };
  }
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted

    Icon.getImageSource("star", 28, "white").then(src =>
      Navigation.mergeOptions(this.props.componentId, {
        // topBar: {
        //   leftButtons: [
        //     {
        //       id: "buttonLeft",
        //       icon: src,
        //       width: 30
        //     }
        //   ]
        // }
        
      })
    );
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  // componentDidMount(){

  // }

  navigationButtonPressed({ buttonId }) {
    console.log(buttonId);
    // if (buttonId == "buttonLeft") Navigation.pop(this.props.componentId);
    if (buttonId == "backPress") Navigation.pop(this.props.componentId);
    // will be called when "buttonOne" is clicked
  }
  handleBackPress = () => {
    Navigation.pop(this.props.componentId);
    return true;
  };
  render() {
    return (
      <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
        <HeaderYellow Back = {this.handleBackPress} Title = "Màn hình 1" MenuTitle = "" Menu = {()=>{console.log("A")}}></HeaderYellow>
        <View style={{ padding: 15 }}>
          <Text style={{ color: "#5C5C5C", fontWeight: "bold", fontSize: 20 }}>
            Select
          </Text>
          
        </View>
        <View
          style={{
            height: 200,
            borderRadius: 5,
            margin: 10,
            overflow: "hidden"
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: "#FECC2F",
              borderRadius: 5
            }}
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  componentId: "Tab3",
                  name: "Tab3",
                  options: {
                    bottomTabs: {
                      visible: false,
                      drawBehind: true,
                      animate: false,
                      backgroundColor: "red"
                    },
                    topBar: {
                      leftButtons: [
                        {
                          id: "backPress",
                          text: "Back",
                          icon: require("../../assets/images/shoess.png")
                        }
                      ]
                    }
                  },
                  passProps: {
                    text: "Tab3"
                  }
                }
              });
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginTop: 10,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Nhấn vô đi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FECC2F",
              borderRadius: 5 , 
              marginTop : 10 , padding : 10
            }}
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  componentId: "Tab4",
                  name: "Tab4",
                  options: {
                    bottomTabs: {
                      visible: false,
                      drawBehind: true,
                      animate: false,
                      backgroundColor: "red"
                    },
                    topBar: {
                      leftButtons: [
                        {
                          id: "backPress",
                          text: "Back",
                          icon: require("../../assets/images/shoess.png")
                        }
                      ]
                    }
                  },
                  passProps: {
                    text: "Tab4"
                  }
                }
              });
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginTop: 10,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Nhấn vô đi Tab4
            </Text>
          </TouchableOpacity>
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
)(Tab1);
