import React, { Component } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { gtd_stylesheet } from "../../styles";

export default class WorkForm extends Component {
  render() {
    return (
      <View style={gtd_stylesheet.container}>
        <View style={gtd_stylesheet.upperPart}>
          
          <Text h2>For how long are you going to sprint?</Text>

          <View style={gtd_stylesheet.formContainer}>
            <Input keyboardType="numeric" placeholder="hh" inputStyle={{textAlign:'right'}}/>
            <Text>:</Text>
            <Input keyboardType="numeric" placeholder="mm" />
          </View>

        </View>

        <Button type="solid" title="Start!" />
      </View>
    );
  }
}
