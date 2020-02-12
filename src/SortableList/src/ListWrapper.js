import React, {Component} from 'react';


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

        return <Component {...props}/>
    }
}

export default ListWrapper
