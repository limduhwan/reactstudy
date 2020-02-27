import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from "redux-undo";

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>>
      Redo
    </button>
</p>
)

const mapStateToProps = (state, ownProps) => {

  const {id} = ownProps;

  console.log('ownProps.id    ', id);

  const canUndo = state.todos.past.length > 0;
  const canRedo = state.todos.future.length > 0;

  return {canUndo, canRedo}
}

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
})

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
