import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterContainer from './containers/ConterContainer';
import HookExample from './hooking/HookExample';
import ClassHooking from './hooking/ClassHooking';
import ComponentContainer from './component_self/ComponentContainer';
import ClipBoardCopyExample from './ClipBoard/ClipBoardCopyExample';
import RefExample from './ref/ref_Example';
import Index from "./SortableList/src";
import Infinite from './InfiniteScroll/app/App';

class App extends Component {

    render() {
        return (
            <div>
                {/*<Counter/>*/}
                {/*<CounterContainer/>*/}
                {/*<HookExample/>*/}
                {/*<div>*/}
                {/*    <ClassHooking/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <ComponentContainer/>*/}
                {/*</div>*/}
                {/*<ClipBoardCopyExample/>*/}
                {/*<RefExample/>*/}
                {/*<Index/>*/}
                <Infinite/>>
            </div>
        )
    }

}

export default App;
