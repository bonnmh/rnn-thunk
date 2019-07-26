import Toast from "react-native-root-toast";

export default class toast {
  static show(text, _duration) {
    Toast.show(text, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      shadow: false,
      backgroundColor: "red",
      textColor: "#ffffff"
    });
    // setTimeout(function () {
    //     Toast.hide(toast);
    // },_duration);
  }
}
// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
