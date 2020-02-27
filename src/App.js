import React, {Component} from 'react';
import AccordianContainer from "./accordian/AccordianContainer";
import CloneElement from "./cloneElement/CloneElement";
import ComponentLifeCycle from './Component_LifeCycle/ComponentLifeCycle';
import Drag_listView from './drag_listview/Drag_listView';
import Drag_listview_sample from './drag_listview_sample/Drag_listview_sample';
import UndoApp from './undo/undoApp';
import HookExample from "./hooking/HookExample";
import ClassHooking from "./hooking/ClassHooking";

class App extends Component {
    render() {
        return (
            <div>
                {/*<Counter/>*/}
                {/*<CounterContainer/>*/}
                <HookExample/>
                {/*<div>*/}
                {/*    <ClassHooking/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <ComponentContainer/>*/}
                {/*</div>*/}
                {/*<ClipBoardCopyExample/>*/}
                {/*<RefExample/>*/}
                {/*<Index/>*/}
                {/*<Infinite/>*/}
                {/*<AccordianContainer/>*/}
                {/*<CloneElement/>*/}
                {/*<ComponentLifeCycle/>*/}
                {/*<Drag_listview_sample/>*/}
                {/*<Drag_listView/>*/}
                <UndoApp/>
            </div>
        )
    }

}

export default App;
