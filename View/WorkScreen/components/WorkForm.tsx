import React, { Component } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { gtd_stylesheet } from "../../styles";

import { Formik } from "formik";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  hours: yup.number().required().positive().integer().lessThan(12),
  minutes: yup.number().required().moreThan(-1).integer().lessThan(60),
});

export default class WorkForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ hours: "", minutes: "" }}
        validateOnChange={true}
        onSubmit={(val) => {
          console.log(val);
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
          <View style={gtd_stylesheet.container}>
            <View style={gtd_stylesheet.upperPart}>
              <Text h2>For how long are you going to sprint?</Text>

              <View style={gtd_stylesheet.formContainer}>
                <View>
                  <Input
                    keyboardType="numeric"
                    placeholder="hh"
                    inputStyle={{ textAlign: "right" }}
                    onChangeText={handleChange("hours")}
                    onBlur={handleBlur("hours")}
                    value={values.hours}
                  />
                  {touched.hours && errors.hours && <Text>{errors.hours}</Text>}
                </View>
                <Text>:</Text>
                <View>
                  <Input
                    keyboardType="numeric"
                    placeholder="mm"
                    onChangeText={handleChange("minutes")}
                    onBlur={handleBlur("minutes")}
                    value={values.minutes}
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
          </View>
        )}
      </Formik>
    );
  }
}
