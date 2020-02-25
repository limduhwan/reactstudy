// 컴포넌트를 생성할 때는
// constructor -> static getDerivedStateFromProps() -> render -> componentDidMount
// 컨디렌마

// 컴포넌트의 prop이 변경될 때는
// static getDerivedStateFromProps() -> shouldComponentUpdate -> render()-> getSnapshotBeforeUpdate() -> componentDidUpdate()
// 디슈렌스업

// getDerivedStateFromProps
// 첫번째 인자(nextProps) 는 부모 컴포넌트로 부터 전달받는 객체이며,
// 두번째 인자(prevState) 는 렌더링되기 이전의 state 객체다.
// getDerivedStateFromProps() 메서드를 선언하고 따로 return 하지 않을 경우에는 warning이 발생하게 된다.
// return 하는 데이터는 객체여야 한다.

// shouldComponentUpdate
// state가 변경되거나 부모 컴포넌트로부터 새로운 props를 전달받을 때 실행됩니다.

// getSnapshotBeforeUpdate(prevProps, prevState)
// props, state 업데이트가 발생하여 render() 메서드가 호출된 뒤 즉시 호출되는 메서드다.
// 컴포넌트 최초 마운트 시에는 호출되지 않는다.
// getSnapshotBeforeUpdate() 메서드는 데이터를 return 해야하며, return 된 데이터는
// componentDidUpdate() 메서드의 세번째 인자로 전달된다.
// 만약 return 을 명시하지 않을 경우에는 warning 이 발생하게 된다.
// 또, getSnapshotBeforeUpdate() 메서드를 선언 해놓고 componentDidUpdate() 메서드를
// 선언하지 않을 경우에도 warning이 발생한다.
// getSnapshotBeforeUpdate() 메서드에서
// DOM 변경 이전 상태를 snapshot 하여 return 하고, DOM 변경이 완료된 후 호출되는
// componentDidUpdate() 메서드에서 snapshot 데이터를 참고하여 작업을 처리할 때 사용할 수 있다.
// React 공식페이지에서는 scroll bar 위치를 예로 하여 설명하고 있다.
// <https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate>


import React, { Component } from "react";
import { render } from "react-dom";

class MyComponent extends Component {
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('MyComponent getDerivedStateFromProps', nextProps, prevState);
    return nextProps.counter === prevState.counter ? null : {counter: nextProps.counter};
  }

  constructor(props) {
    console.log('MyComponent constructor', props.counter);
    super(props);
    this.state = {
      counter: this.props.counter,
      message: "Hello"
    };
  }

  handleClick = () =>
    //업데이트 함수로 즉시 실행
    this.setState(prevState => ({
      counter: ++prevState.counter
    }));

  render = () => (
    <div>
      <p>The counter in MyComponent is {this.state.counter}</p>
      <p>The button will increase the counter only inside MyComponent.</p>
      <button onClick={this.handleClick}>Press me!</button>
    </div>
  );
}

export default class ComponentLifeCycle extends Component {
  constructor(props) {
    console.log('ComponentLifeCycle constructor', props.counter);
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () =>
    this.setState(previousState => ({
      counter: ++previousState.counter
    }));

  render = () => (
    <div>
      <p>The counter in App is {this.state.counter}</p>
      <p>
        The button below will increase the counter in both App as well as in
        MyComponent.
      </p>
      <button onClick={this.handleClick}>Press me!</button>
      <MyComponent {...this.state} />
    </div>
  );
}

