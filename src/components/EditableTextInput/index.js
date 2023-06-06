import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {textInput: '', saveClick: false}

  saveText = () => {
    this.setState(prevState => ({saveClick: !prevState.saveClick}))
  }

  changeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {saveClick, textInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>

          {saveClick ? (
            <div className="savedInput">
              <p className="saveText">{textInput}</p>
              <button onClick={this.saveText} type="button" className="editBtn">
                Edit
              </button>
            </div>
          ) : (
            <div className="userInput">
              <input
                className="inputLabel"
                onChange={this.changeText}
                type="text"
                value={textInput}
              />
              <button onClick={this.saveText} type="button" className="editBtn">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
