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
    const {question, answer} = e.target
    this.setState({
      question: question,
      answer: answer
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.state({question: '', answer: ''})
  }

  render() {
    return (
      <div className="title">Creat a Flash Card
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="question">Question</label>
            <input
              type="text"
              className="form-control"
              id="question"
              value = {this.state.question}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label className="answer">Answer</label>
            <input
              type="text"
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
