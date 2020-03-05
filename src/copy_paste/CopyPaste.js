import React, { Component } from "react"

export default class CopyPaste extends Component {
  copyCodeToClipboard = () => {
    const textArea = this.textArea
    textArea.select();
    document.execCommand("copy")
  }

  handleKeyDown = (e) =>{
    console.log('handleKeyPress ', e.keyCode);
    if(e.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}
        >
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value="Example copy for the textarea.aaaa"
            contentEditable={true}
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
        </div>
        <div>
          <textarea
          width={500}
          height={500}
          />
        </div>
      </div>
    )
  }
}
