import CardCreator from './create-card'
import React, { Component, Fragment } from 'react'
import CardsList from './cards-list'
import Navbar from './navbar'
import hash from './hash'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path } = hash.parse(location.hash)
    this.state = {
      cards: [{question: 'who?', answer: 'khgdhgf adhgadhgdf dhgi kjdhgks khkdsdhjgs skhfdkjgh sdkh;aj lsdhgdf sghgh'}, {question: 'where?', answer: 'occs'}],
      view: {
        path
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
    const { path } = this.state.view
    switch (path) {
      case 'create':
        return <CardCreator onSubmit={this.saveCard}/>
      case 'list':
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
