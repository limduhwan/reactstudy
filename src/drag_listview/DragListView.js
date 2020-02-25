import React from 'react';
import PropTypes from 'prop-types';

export default class DragListView {


  onMouseDown = () => {

  }

  render() {
    return (
      <div
        onMouseDown={this.onMouseDown}
        ref = { (ref) => {
            this.dragList  = ref;
          }
        }
      >
        {this.props.children}
      </div>
    )
  }
}

DragListView.propTypes = {
  children: PropTypes.node,
}

DragListView.defaultProps = {
  children: null,
}
