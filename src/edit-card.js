import React from 'react'

export default class CardEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.selectedCard.question,
      answer: this.props.selectedCard.answer,
      id: this.props.selectedCard.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    const newCard = Object.assign({}, this.state)
    this.props.onSubmit(newCard)
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
              required
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
              required
              type="text"
              name="answer"
              className="form-control"
              id="answer"
              value={this.state.answer}
              onChange={this.handleChange}/>

          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block"><em>Update</em></button>
        </form>
      </div>
    )
  }

}
