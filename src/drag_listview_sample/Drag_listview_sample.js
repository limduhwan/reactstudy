import React from 'react';
import ReactDragColumnView from './ReactDragColumnView';

export default class drag_listview_sample extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: `col${i}`
      });
    }
    this.state = {
      data
    };
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const { data } = that.state;
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'li',
      handleSelector: 'a'
    };

    return (
      <div>
        <h2>Dragging columns</h2>
        <div>
          <ReactDragColumnView {...dragProps}>
            <ol style={{ width: 70 * this.state.data.length }}>
              {this.state.data.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <a href="#">Drag</a>
                </li>
              ))}
            </ol>
          </ReactDragColumnView>
        </div>
      </div>
    );
  }
}
