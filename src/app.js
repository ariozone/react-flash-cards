import CardCreator from './create-card'
import React, { Component, Fragment } from 'react'
import CardsList from './cards-list'
import Navbar from './navbar'
import hash from './hash'
import CardEditor from './edit-card'

export default class App extends Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('card-app-state')
    const appState = JSON.parse(stateJson) || {}
    const { path, params } = hash.parse(location.hash)
    this.state = {
      view: {path, params},
      cards: appState.cards || [],
      cardNumber: appState.cardNumber || 1,
      currentCard: ''
    }
    this.saveCard = this.saveCard.bind(this)
  }

  saveCard(card) {
    const {cardNumber} = this.state
    const cardsArray = this.state.cards.slice()
    card.id = cardNumber
    cardsArray.push(card)
    this.setState({cards: cardsArray,
      cardNumber: cardNumber + 1})
  }

  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'create':
        return <CardCreator onSubmit={this.saveCard}/>
      case 'edit':
        return <CardEditor/>
      default:
        return <CardsList cards={this.state.cards}/>
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { cardNumber, cards } = this.state
      const stateJson = JSON.stringify({ cardNumber, cards })
      localStorage.setItem('card-app-state', stateJson)
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        {this.renderView()}
      </Fragment>
    )
  }
}
