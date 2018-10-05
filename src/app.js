import CardCreator from './create-card'
import React, { Component, Fragment } from 'react'
import CardsList from './cards-list'
import Navbar from './navbar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      view: {
        path: 'list',
        params: {}
      }
    }
    this.saveCard = this.saveCard.bind(this)
  }
  saveCard(card) {
    const cardsArray = this.state.cards.slice()
    cardsArray.push(card)
    this.setState({cards: cardsArray})
  }
  renderView() {
    const {path} = this.state.view
    switch (path) {
      case 'create':
        return <CardCreator onSubmit={this.saveCard}/>
      case 'list':
        return <CardsList/>
    }
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
