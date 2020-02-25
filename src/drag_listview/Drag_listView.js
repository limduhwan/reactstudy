import React from 'react';

class Drag_listView extends React.Component {

  constructor(props){
    super(props);

    const data = [];

    for(let i = 1, len = 21; i<len; i ++){
      data.push({
        title: `col${i}`
      });
    }

    this.state = {
      data
    }
  }

  render() {
    return (
      <div>
        <ol>
        {this.state.data.map((item, index)=> (
          <li
            key={index}
          >
            {item.title}
            <a href="#"> Drag</a>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

export default Drag_listView;
