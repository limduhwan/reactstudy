import React, {Component} from 'react';
import Column from "./Column";
import styles from './styles.css'

const dimensions = [
  { width: 400, height: 100 },
  { width: 300, height: 400 },
  { width: 200, height: 300 },
  { width: 300, height: 300 },
  { width: 200, height: 300 },
  // { width: 800, height: 600 },
  // { width: 800, height: 400 },
  // { width: 800, height: 400 },
  // { width: 800, height: 400 },
  // { width: 800, height: 800 },
]

export default class ColumnResizing extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  renderItems() {
    return dimensions.map(({width, height}, index) => (
      <div key={index} className={styles.demoItem}>
        <img src={`http://placehold.it/${width}x${height}?text=${index+1}`} alt="" />
      </div>
    ))}



  render () {

    const queries = [
      {columns: 2,
       query: 'min-width: 500px'},
      {columns: 3,
        query: 'min-width: 1000px'},
    ];

    return (
      <div>
        <Column gap="20px" queries={queries}>
        </Column>
      </div>
    )
  }
}
