import React from 'react';

export default class CloneElement extends React.Component{
  render(){
    return (
      <ParentComp>
        <MyButton>
          <br></br>
        </MyButton>
        <MyButton>
          <br></br>
        </MyButton>
      </ParentComp>
    )
  }
}

class ParentComp extends React.Component {
  render(){

    let newProp = 'red';

    return (
      <div>
        {
          React.Children.map(this.props.children,
          child => {
            return React.cloneElement(child,
              {newProp: 'blue'}, null);
          })
        }

      </div>
    )
  }
}

class MyButton extends React.Component {
  render() {
    return <button style={{ color: this.props.newProp }}> Hello World!</button>
  }
}
