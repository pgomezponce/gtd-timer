import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gtd_stylesheet } from '../../styles'
import { Text, Button } from 'react-native-elements'
import { work_components } from '../WorkScreen'

export class WorkCongrats extends Component {
    render() {

        let earnings = new Date(this.props.relax.credit)

        let earnings_string = '' + earnings.getUTCHours();

        earnings_string += ':' + ((earnings.getUTCMinutes() < 10) ? ('0' + earnings.getUTCMinutes()) : earnings.getUTCMinutes());
        earnings_string += ':' + ((earnings.getUTCSeconds() < 10) ? ('0' + earnings.getUTCSeconds()) : earnings.getUTCSeconds());


        return (
            <View style={gtd_stylesheet.container}>
                <Text>You earned</Text>
                <Text h1 style={gtd_stylesheet.textCenter}> {earnings_string} </Text>
                <Text>so far!</Text>
                <Button title='Start again!' onPress={() => {this.props.navigation.navigate(work_components.form)}}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    relax: state.relax
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkCongrats)
