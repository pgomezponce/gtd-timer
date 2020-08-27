import React, { Component } from 'react'
import { View, BackHandler } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { sprintUpdate } from "../../../Model/redux/actions";
import { relaxUpdate } from "../../../Model/redux/actions";
import { gtd_stylesheet } from '../../styles';
import { Text } from 'react-native-elements';
import { work_components } from '../WorkScreen';

export class WorkTimer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props);
        const now = new Date();
        this.state = {start: now, diff:0}
        
        
    }

    componentDidMount(){
        let id = setInterval(() => {
            let n = new Date();
            let diff =  {};
            diff = this.state.start.getTime() + this.props.sprintCredit.credit - n.getTime()

            if(diff <= 0) {
                clearInterval(this.state.interval);
                diff = 'tt';
                this.props.relaxUpdate({credit: this.props.sprintCredit.credit / 3})
                this.props.sprintUpdate({credit: this.props.sprintCredit.credit * -1});
                this.props.navigation.navigate(work_components.end);
                /* navigate to end & congrats */
            }
            this.setState({diff: diff});

        }, 250);

        this.setState({interval: id});

        BackHandler.addEventListener('hardwareBackPress', function() {
            /**
             * this.onMainScreen and this.goBack are just examples,
             * you need to use your own implementation here.
             *
             * Typically you would use the navigator here to go to the last state.
             */
            /**
             * Returning false will let the event to bubble up & let other event listeners
             * or the system's default back action to be executed.
             */
            return true;
          });
    }

    render() {
        let diff = this.state.diff;
        if (this.state.diff !== 'tt') diff = new Date(this.state.diff).toUTCString();

        
        return (
            <View style={gtd_stylesheet.container}>
                <Text h1 style={gtd_stylesheet.textCenter}> {diff}  </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    sprintCredit: state.sprint
})

const mapDispatchToProps = {
    sprintUpdate,
    relaxUpdate,
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkTimer)
