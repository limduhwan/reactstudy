import React, {Component} from 'react';
import ListWrapper from './src/ListWrapper';

class SortableListContainer extends Component{

    render() {
        const items = ['1', '2', '3'];
        const div = <div></div>
        return(
            <div>
                <ListWrapper
                    items={items}
                    component={div}/>
            </div>
        )

    }
}

export default SortableListContainer;

