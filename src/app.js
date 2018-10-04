import CardCreator from './create-card'
import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.saveCard = this.saveCard.bind(this)
  }
  saveCard(card) {
    this.state.cards.push(card)
  }
  render() {
    return (

      <CardCreator onSubmit={this.saveCard}/>

    )
  }
}
