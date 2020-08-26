import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';
import WorkonBoarding from './components/WorkonBoarding';
import WorkForm from './components/WorkForm';
import WorkTimer  from './components/WorkTimer';

const stack = createStackNavigator();

export const work_components = {
    onBoarding: 'New Sprint!',
    form:"Sprint for...",
    timer:'Sprinting..',
    end:'Sprint finished!'
}


export default class WorkScreen extends Component {
    render() {
        return (
            <stack.Navigator>
                <stack.Screen name={work_components.onBoarding} component={WorkonBoarding} />
                <stack.Screen name={work_components.form} component={WorkForm} />
                <stack.Screen name={work_components.timer} component={WorkTimer} />
            </stack.Navigator>
        )
    }
}
