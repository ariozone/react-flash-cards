import React from 'react'

export default class CardCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
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
    return (
      <div>
        <div className="title">Creat a Flash Card</div>
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="question">Question</label>
            <input
              type="text"
              name="question"
              className="form-control"
              id="question"
              value = {this.state.question}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="answer">Answer</label>
            <input
              type="text"
              name="answer"
              className="form-control"
              id="answer"
              value={this.state.answer}
              onChange={this.handleChange}/>

          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block"><em>Save</em></button>
        </form>
      </div>
    )
  }
}
