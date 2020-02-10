import React, { Component } from 'react';
import './EpicMenu.css';

class EpicMenu extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        }
    }

    // showForm() {
    //     this.setState({
    //         showForm: !this.state.showForm
    //     });
    // }

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render(){
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';

        let linksMarkup = this.props.links.map( (link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );
        })

        return(
            <nav className="menu">
                <h1 style={{
                    backgroundImage: `url(` + this.props.logo + ')'
                }} >Epic Co.</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>

                    <button onClick={this.showForm}>aa</button>
                </div>

                {searchForm}
            </nav>

        )
    }



}

export default EpicMenu;