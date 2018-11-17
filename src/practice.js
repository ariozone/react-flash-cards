import React from 'react'
export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      viewAnswer: false
    }
    this.toLeft = this.toLeft.bind(this)
    this.toRight = this.toRight.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  toLeft() {
    const { currentCard } = this.state
    if (currentCard === 0) {
      this.setState({ currentCard: this.props.cards.length - 1 })
    }
    else {
      this.setState({ currentCard: currentCard - 1 })
    }
    this.setState({ viewAnswer: false })
  }
  toRight() {
    const { currentCard } = this.state
    if (currentCard === this.props.cards.length - 1) {
      this.setState({ currentCard: 0 })
    }
    else {
      this.setState({ currentCard: currentCard + 1 })
    }
    this.setState({ viewAnswer: false })

  }

  toggleAnswer() {
    this.setState({ viewAnswer: !this.viewAnswer })
  }

  render() {
    const { cards } = this.props
    const { currentCard, viewAnswer } = this.state
    const progress = 10
    return (
      <div className="container p-2">
        <div className="row d-flex justify-content-center">
          <span>
            <i
              className="fas fa-arrow-left fa-4x mr-4 mt-4"
              onClick={this.toLeft}></i>
          </span>
          <div className="card w-50 text-center shadow-lg border-light">
            <div className="card-body py-4">
              <h6 className="card-title">{cards[currentCard].question}</h6>
              <p className="card-text mt-4">{viewAnswer ? cards[currentCard].answer : <span className="showAnswer" onClick={this.toggleAnswer}>See Answer  <i className="far fa-eye fa-lg" ></i></span>}</p>
            </div>
          </div>
          <span>
            <i
              className="fas fa-arrow-right fa-4x ml-4 mt-4"
              onClick={this.toRight}></i>
          </span>
        </div>
        <div className="progress w-75 mt-5 mx-auto bg-light shadow-lg">

          <div className="progress-bar progress-bar-striped progress-bar-animated bg-gray" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: progress + '%' }}>
          </div>
        </div>

      </div>
    )
  }
}
