import React from 'react';
import AddTodo from "./containers/AddTodo";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import reducer from './reducers';
import VisibleTodoList from "./containers/VisibleTodoList";

const store = createStore(reducer);

export default function UndoApp() {
  return(
    <Provider store={store}>
      <div>
        <AddTodo/>
        <VisibleTodoList/>
      </div>
    </Provider>
  )
}
