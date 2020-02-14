import React, {Component} from 'react';
// import ListWrapper from './src/ListWrapper';
// import { SortableElement } from '../SortableElement/index';
// import { SortableContainer } from '../SortableContainer/index';

// const Item = SortableElement( () => {
//     return (
//       <div>
//           <div>
//               <span>Item</span>
//           </div>
//       </div>
//     );
// });
//
// const SortableList = SortableContainer(
//     ({items}
//
//     ) => {
//     return (
//       <div>
//           {items.map( ( value, index) => {
//               <Item
//                 index={index}
//               />
//           })}
//       </div>
//     );
// })

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

        // return <Component {...props}/>
        return <></>
    }
}


class Index extends Component{

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

export default Index;

