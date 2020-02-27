import undoable from 'redux-undo'

const todo = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  console.log('action.type    ', action.type);
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case 'TOGGLE_TODO':
        return state.map(t => todo(t, action))

    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos

// export default todos;
