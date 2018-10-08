import React from 'react'

export default class CardEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'question') {
      this.setState({
        question: e.target.value
      })
    }
    if (e.target.name === 'answer') {
      this.setState({
        answer: e.target.value
      })
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const { question, answer } = this.state
    this.setState({question: '', answer: ''})
    this.props.onSubmit({question, answer})

  }

  render() {
    console.log(this.props)
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
              id="question"
              value = {this.props.question}/>
          </div>
          <div className="form-group">
            <label className="answer">Answer</label>
            <input
              type="text"
              name="answer"
              className="form-control"
              id="answer"
              value={this.props.answer}/>

          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block"><em>Update</em></button>
        </form>
      </div>
    )
  }

}
