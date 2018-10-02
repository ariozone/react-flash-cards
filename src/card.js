import React from 'react'
// import ReactDOM from 'react-dom'

export default class FlashCard extends React.Component {
  render() {
    return (
      <form className="card shadow">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" className="form-control" id="question"/>
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input type="text" className="form-control" id="answer"/>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}
// ReactDOM.render(<FlashCard/>, document.getElementById('root'))
