import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { gtd_stylesheet } from "../../styles";

import {connect} from 'react-redux';
import { sprintUpdate } from "../../../Model/redux/actions";
import { Formik } from "formik";

import * as yup from "yup";
import { work_components } from "../WorkScreen";

const validationSchema = yup.object().shape({
  hours: yup.number().required().moreThan(-1).integer().lessThan(12),
  minutes: yup.number().required().moreThan(-1).integer().lessThan(60),
});

const convertToDate = (hours, minutes) => {
  let value = hours * 60 * 60 * 1000 + minutes * 60 *1000;

  return value;
}


export class WorkForm extends Component {

  render() {
    console.log(this.props);

    return (
      <Formik
        initialValues={{ hours: "", minutes: "" }}
        validateOnChange={true}
        onSubmit={(val) => {
          this.props.sprintUpdate({credit: convertToDate(val.hours, val.minutes)});        
          this.props.navigation.navigate(work_components.timer)  
        }}
        validationSchema={validationSchema}
        initialErrors={{ hours: "", minutes: "" }}
        
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <KeyboardAvoidingView style={gtd_stylesheet.container} behavior='padding'>
            <View style={gtd_stylesheet.upperPart}>
              <Text h2 style={gtd_stylesheet.textCenter}>For how long are you going to sprint?</Text>

              <View style={[gtd_stylesheet.formContainer]}>
                <View style={{width:'50%'}}>
                  <Input
                    keyboardType="numeric"
                    placeholder="hh"
                    inputStyle={[gtd_stylesheet.textCenter, {textAlign:'right'}]}
                    onChangeText={handleChange("hours")}
                    onBlur={handleBlur("hours")}
                    value={values.hours}
                  />
                  {touched.hours && errors.hours && <Text style={{textAlign:'right'}}>{errors.hours}</Text>}
                </View>
                <Text style={gtd_stylesheet.textCenter}>:</Text>
                <View style={{width:'50%'}}>
                  <Input
                    keyboardType="numeric"
                    placeholder="mm"
                    onChangeText={handleChange("minutes")}
                    onBlur={handleBlur("minutes")}
                    value={values.minutes}
                    inputStyle={[gtd_stylesheet.textCenter,{textAlign:'left'}]}
                  />
                  {touched.minutes && errors.minutes && (
                    <Text>{errors.minutes}</Text>
                  )}
                </View>
              </View>
            </View>
            <Button
              type="solid"
              title="Start!"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => ({
  sprintCred: state.sprint
})


const mapReducerToProps = {
  sprintUpdate: sprintUpdate,
}

export default connect(mapStateToProps, mapReducerToProps)(WorkForm)