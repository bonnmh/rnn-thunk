import React, { Component } from "react";

import { View, Dimensions, Text, TouchableOpacity } from "react-native";
const heightD = Dimensions.get("window").height

import Icon from "react-native-vector-icons/FontAwesome5";
export default class HeaderYellow extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#FECC2F",
          height: heightD / 11,
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={()=>this.props.Back()}
        >
          <Icon name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
        <View
          style={{ flex: 10, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{this.props.Title}</Text>
        </View>
        <TouchableOpacity
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          onPress={()=>this.props.Menu()}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{this.props.MenuTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
