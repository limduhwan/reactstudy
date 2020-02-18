import React, { Component, PropTypes } from 'react';


class App extends Component {

    render() {
        return (
            <div style={styles.item}>
                {this.props.data}
            </div>
        );
    }
}


const styles = {
    item: {
        fontSize: '30px',
        height: '40px',
    },
};


export default App;
