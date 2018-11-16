import React from 'react'
export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0
    }
    this.toLeft = this.toLeft.bind(this)
    this.toRight = this.toRight.bind(this)
  }

  toLeft() {
    const { currentCard } = this.state
    if (currentCard === 0) {
      this.setState({ currentCard: this.props.cards.length - 1 })
    }
    else {
      this.setState({ currentCard: currentCard - 1 })
    }

  }
  toRight() {
    const { currentCard } = this.state
    if (currentCard === this.props.cards.length - 1) {
      this.setState({ currentCard: 0 })
    }
    else {
      this.setState({ currentCard: currentCard + 1 })
    }
  }

  render() {
    return (
      <div className="container p-2">
        <div className="row d-flex justify-content-center">
          <span>
            <i
              className="fas fa-arrow-left fa-5x mr-3 mt-5"
              onClick={this.toLeft}></i>
          </span>
          <div className="card w-50 text-center shadow-lg border-light">
            <div className="card-body">
              <h6 className="card-title mt-3">{this.props.cards[this.state.currentCard].question}</h6>
              <p className="card-text">{this.props.cards[this.state.currentCard].answer}</p>
            </div>
          </div>
          <span>
            <i
              className="fas fa-arrow-right fa-5x ml-3 mt-5"
              onClick={this.toRight}></i>
          </span>
        </div>
      </div>
    )
  }
}
