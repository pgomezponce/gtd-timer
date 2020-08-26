import React, { Component } from 'react'
import { View } from 'react-native'
import {Text, Button} from 'react-native-elements'
import { names } from '../WorkScreen'
import { gtd_stylesheet } from '../../styles'
export default class WorkonBoarding extends Component {
    render() {
        return (
            <View style={gtd_stylesheet.container}>
                <View>
                <Text h2 style={gtd_stylesheet.textCenter}>Let's begin</Text>
                <Text h1 style={gtd_stylesheet.textCenter}>SPRINT</Text>
                </View>
                <Button type='solid' title='Start!' onPress={() => this.props.navigation.navigate(names.form)}/>
            </View>
        )
    }
}


