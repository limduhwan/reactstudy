import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleOnClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const accordionItemClassNames = classNames([
      'accordion-item',
      {
        active: this.state.isOpen
      }

    ]);

    return (
      <div className={accordionItemClassNames}>
        <button className="title" onClick={this.handleOnClick}>
          {this.props.title}
        </button>
        <div className="panel">{this.props.children}</div>
      </div>
    );
  }
}

export default AccordionItem;
