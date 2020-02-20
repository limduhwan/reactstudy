import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactScrolla extends Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll(this);
    }

    handleScroll(){
        const { percentage, onPercentage } = this.props;

        // const { scrollTop, scrollHeight, clientHeight } = this.container;
        //
        // if (percentage && onPercentage) {
        //     const percentNow = scrollTop / (scrollHeight - clientHeight) * 100;
        //
        //     if (percentNow > percentage) {
        //         onPercentage();
        //     }
        // }
    }

    render() {
        const copyProps = { ...this.props };
        delete copyProps.isLoading;
        delete copyProps.percentage;
        delete copyProps.onPercentage;
        delete copyProps.children;

        return (
            <div
                onScroll={this.handleScroll}
                ref={container => {
                    this.container = container;
                }}
                {...copyProps}
            >
                {this.props.children}
            </div>
        );
    }
}

export default ReactScrolla;
