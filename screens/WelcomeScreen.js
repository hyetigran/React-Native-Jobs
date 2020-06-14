import React, { Component } from "react";
import { View, Text } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp" },
  { text: "Set your location, then swipe away" },
];
class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };
  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
