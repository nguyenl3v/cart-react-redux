import React, { Component } from 'react'
import Messger from './../components/Messger';
import {connect} from 'react-redux';
class MessageContainer extends Component {
    render() {
        const {Message} = this.props;
        return (
            <React.Fragment>
                <Messger Message={Message}/>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Message: state.message
    }
}
export default connect(mapStateToProps,null)(MessageContainer);