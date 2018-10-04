import CardCreator from './create-card'
import React, { Component, Fragment } from 'react'
// import CardsList from './cards-list'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.saveCard = this.saveCard.bind(this)
  }
  saveCard(card) {
    const cardsArray = this.state.cards.slice()
    cardsArray.push(card)
    this.setState({cards: cardsArray})
  }
  render() {
    return (
      <Fragment>
        <CardCreator onSubmit={this.saveCard}/>
      </Fragment>
    )
  }
}
