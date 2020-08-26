import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';
import WorkonBoarding from './components/WorkonBoarding';
import WorkForm from './components/WorkForm';

const stack = createStackNavigator();

export const names = {
    onBoarding: 'New Sprint!',
    form:"Sprint for...",
    timer:'Sprinting..',
    end:'Sprint finished!'
}


export default class WorkScreen extends Component {
    render() {
        return (
            <stack.Navigator>
                <stack.Screen name={names.onBoarding} component={WorkonBoarding} />
                <stack.Screen name={names.form} component={WorkForm} />
            </stack.Navigator>
        )
    }
}
