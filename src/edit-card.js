import React from 'react'

export default class CardEditor extends React.Component {
  render() {
    return (
      <div>
        <div className="title">Edit this Flash Card</div>
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="question">Question</label>
            <input
              type="text"
              name="question"
              className="form-control"
              id="question"/>
          </div>
          <div className="form-group">
            <label className="answer">Answer</label>
            <input
              type="text"
              name="answer"
              className="form-control"
              id="answer"/>
          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block"><em>Update</em></button>
        </form>
      </div>
    )
  }

}
