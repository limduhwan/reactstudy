import React, {Component} from 'react';

// import logo from './logo.png';
import EpicMenu from "./EpicMenu";

class App_EpicMenu extends Component {


    render() {
        const links = [
            {label: 'Home', link: '#home', active: true},
            {label: 'About', link: '#about'},
        ];

        return (
            <div>
                <EpicMenu links={links}></EpicMenu>
            </div>
        );
    }

}

export default App_EpicMenu;