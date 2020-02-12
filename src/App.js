import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterContainer from './containers/ConterContainer';
import HookExample from './hooking/HookExample';
import ClassHooking from './hooking/ClassHooking';
import ComponentContainer from './component_self/ComponentContainer';
import ClipBoardCopyExample from './ClipBoard/ClipBoardCopyExample';
import RefExample from './ref/ref_Example';
import SortableListContainer from "./SortableList/SortableListContainer";

class App extends Component {

    render() {
        return (
            <div>
                {/*<Counter/>*/}
                <CounterContainer/>
                <HookExample/>
                <div>
                    <ClassHooking/>
                </div>
                <div>
                    <ComponentContainer/>
                </div>
                <ClipBoardCopyExample/>
                <RefExample/>
                <SortableListContainer/>
            </div>
        )
    }

}

export default App;
