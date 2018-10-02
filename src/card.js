import React from 'react'

export default class FlashCard extends React.Component {
  render() {
    return (
      <form className="card-body" >
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" className="form-control" id="question"/>
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input type="text" className="form-control" id="answer"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Save</button>
      </form>
    )
  }
}
