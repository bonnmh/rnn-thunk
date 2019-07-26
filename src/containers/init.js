import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import { fetchingWordAll } from "../store/actions/wordApi";

class Init extends Component {
  static options(passprops) {
    return {
      topBar: {
        visible: false,
        drawBehind: true
      }
    };
  }
  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs : {
        backgroundColor : '#FECC2F'
      } , 
      sideMenu : {
        right : {
          visible : true , 
          component : {
            id: 'TestDrawer',
            name: 'TestDrawer',
            options: {},
            passProps: {
              text: 'TestDrawer'
            }
          }
        }
      }
    })
  }
  componentDidMount() {
    this.props.fetchingWordAll();
  }
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: "#FECC2F",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Tab1",
                options: {
                  bottomTabs: {
                    visible: true,
                    drawBehind: true,
                    animate: true , 
                    backgroundColor : '#FECC2F' , 
                    text : {
                      fontSize : 20
                    }
                  },
                  topBar: {
                    leftButtons: [
                      {
                        id: "backPress",
                        text: "Back",
                        icon : require("../../src/assets/images/purses_bags.png") , 
                      }
                    ]
                  }
                },
                passProps: {
                  text: "Tab1" , 
                  color : 'blue' , 
                  fontSize : 20
                }
              }
            });
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    words: state.wordApiReducer.data
  };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingWordAll: () => dispatch(fetchingWordAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
