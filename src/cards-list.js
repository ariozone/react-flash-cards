import React from 'react'
const styles = {
  card: { width: '20rem' }
}
export default class CardsList extends React.Component {
  render() {
    if (this.props.cards.length !== 0) {
      return (
        <div className="container p-2">
          <div className="row d-flex justify-content-center">
            {
              this.props.cards.map((card, number) => {
                const id = card.id
                return (
                  <div id={id} key={number} className="card border-light mb-3 shadow-lg" style={styles.card}>
                    <div className="card-body">
                      <h6 className="card-title">{card.question}</h6>
                      <p className="card-text"> &nbsp;&nbsp; {card.answer}</p>
                      <a href={`#edit?cardId=${id}`} className="far fa-edit"></a>
                      <i className="far fa-trash-alt"></i>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container p-2 shadow-lg">
          <div className="row d-flex justify-content-center">
            <div className="card text-center" style={styles.card}>
              <div className="card-body">
                <h3 className="card-title">Oops!</h3>
                <h5 className="card-text">You have no flash cards.</h5>
                <a href="#create" className="btn btn-secondary">Make One</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
