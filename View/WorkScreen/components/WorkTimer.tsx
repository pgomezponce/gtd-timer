import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { sprintUpdate } from "../../../Model/redux/actions";
import { useTheme } from '@react-navigation/native';

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
                /* navigate to end & congrats */
            }
            this.setState({diff: diff});

        }, 250);

        this.setState({interval: id});
    }

    render() {
        let diff = this.state.diff;
        if (this.state.diff !== 'tt') diff = new Date(this.state.diff).toUTCString();

        
        return (
            <View>
                <Text style={{color:'white'}}> {diff}  </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    sprintCredit: state.sprint
})

const mapDispatchToProps = {
    sprintUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkTimer)
