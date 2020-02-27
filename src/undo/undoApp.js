import React from 'react';
import AddTodo from "./containers/AddTodo";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import reducer from './reducers';
import VisibleTodoList from "./containers/VisibleTodoList";
import UndoRedo from "./containers/UndoRedo";
import FilterLink from "./containers/FilterLink";
import Footer from "./components/Footer";

const store = createStore(reducer);

export default function UndoApp() {
  return(
    <Provider store={store}>
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <UndoRedo id='123'/>
      </div>
    </Provider>
  )
}
