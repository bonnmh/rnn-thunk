import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screen";

import { Provider } from "react-redux";
import store from "./src/store/index";

registerScreens(Provider, store);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      componentId: "Init",
      stack: {
        children: [
          {
            // component: {
            //   id : 'Init',
            //   name: "Init"
            // }
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "Init",
                          passProps: {
                            text: "Init"
                          }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        text: "Init",
                        icon: require("./src/assets/images/headphoness.png")
                        
                      }
                    },
                    passProps: {
                      text: "Init" , 
                      color : 'red' , 
                      fontSize : 20
                    }
                  }
                },
                {
                  component: {
                    name: "Tab2",
                    passProps: {
                      text: "Tab2"
                    },
                    options: {
                      bottomTab: {
                        text: "Tab2",
                        icon: require("./src/assets/images/laptops.png"),
                        backgroundColor : '#FECC2F',
                        visible: true,
                        drawBehind: true,
                        animate: true
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        options: {
          animations: {
            pop: popAnimations , 
          } , 
          bottomTabs : {
            backgroundColor : 'red'
          },
        }
      }
    }
  });
  
});


const pushAnimations = {
  content: {
    x: {
      from: 1000,
      to: 0,
      duration: 400
      // interpolation: 'accelerate'
    }
  }
};
const popAnimations = {
  content: {
    x: {
      from: 0,
      to: 1000,
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
