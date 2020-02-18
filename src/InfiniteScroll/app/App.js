import React, { Component } from 'react';
import _ from 'lodash';
import ReactScrolla from '../src/ReactScrolls';
import Item from './Item';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: _.range(10),
        };

        this.handelScrollToPercentage = this.handelScrollToPercentage(this);

    }

    handelScrollToPercentage(){
       this.setState({
           data: this.state.data.concat(_.range(50)),
       })
    }

    render() {
        return (
            <div>
                <ReactScrolla
                    style={styles.scroll}
                    percentage={85}
                    onPercentage={this.handelScrollToPercentage}
                >
                    {this.state.data.map( (value, index) => {
                        return (<Item
                            key={index}
                            data={value}/>);
                    }
                )}
                </ReactScrolla>
            </div>
        );
    }



}

const styles = {
    scroll: {
        textAlign: 'center',
        height: window.innerHeight,
        overflow: 'auto',
    },
};


export default App;
