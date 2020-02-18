import React, {Component} from 'react';
import SortableElement from '../SortableElement/index';
import SortableContainer from '../SortableContainer/index';
import range from 'lodash/range';
import random from 'lodash/random';

function getItems(count, height) {
    var heights = [65, 110, 140, 65, 90, 65];
    return range(count).map((value) => {
        return {
            value,
            height: height == null ? heights[random(0, heights.length - 1)] : height,
        };
    });
}

const Item = SortableElement( () => {
    return (
      <div>
          <div>
              <span>Item</span>
          </div>
      </div>
    );
});

const SortableList = SortableContainer(
    ({items}

    ) => {
    return (
      <div>
          {/*{items.map( ( value, index) => {*/}
          {/*    return (*/}
          {/*        /!*<Item                index={index}          />*!/*/}
          {/*    );*/}
          {/*})}*/}
      </div>
    );
})

class ListWrapper extends Component{
    state = {
        items: this.props.items,
        isSorting: false,
    }

    render(){
        const Component = this.props.component;
        const {items, isSorting} = this.state;
        const props = {
            items,
        }

        return <Component {...this.props} {...props}/>
        // return <></>
    }
}


class Index extends Component{

    render() {
        const items = ['1', '2', '3'];
        const div = <div></div>
        return(
            <div>
                <ListWrapper
                    component={SortableList}
                    items={getItems(4, 20)}
                    />
            </div>
        )

    }
}

export default Index;

