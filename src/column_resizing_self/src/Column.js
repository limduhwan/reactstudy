import React, {Component} from 'react';
import PropTypes from 'prop-types';
import mapNodesToColumns from "../../column_resizing/src/mapNodesToColumns";

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  renderColumns(columns) {
    const { children, gap } = this.props;
    const columnStyles = {
      boxSizing: 'border-box',
      float: 'left',
      width: `${1 / columns * 100}%`,
      paddingLeft: gap,
      paddingRight: gap,
    }

    let renderedColumns = children;

    if(columns > 1){
      const columnContainers = mapNodesToColumns({ children, columns });
      renderedColumns = columnContainers.map( (value, index) => (
        <div key={index}>{value}</div>
      ) )
    }

    return renderedColumns;

  }

  render() {

    const { columns = this.props.columns } = this.state;
    console.log('this.props.columns', this.props.columns);
    return(
      <div>
        This is columns
        {this.renderColumns(columns)}
      </div>
    )
  }
}

Column.defaultProps = {
  columns: 3,
}
