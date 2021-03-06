import React, { useState, useEffect } from 'react';

class ClassHooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidUpdate() {
        document.title = ` componentDidUpdate You clicked ${this.state.count} times`;
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        document.title = `componentDidMount You clicked ${this.state.count} times`;
        console.log('componentDidMount');
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        )
    }


}

export default ClassHooking;
