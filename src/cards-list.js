import React from 'react'
const styles = {
  card: {width: '18rem'}
}
export default class CardsList extends React.Component {
  render() {
    if (this.props.cards.length !== 0) {
      return (
        <div className="container p-2">
          <div className="row d-flex justify-content-center">
            {
              this.props.cards.map((card, number) => {
                return (
                  <div key={number} className="card" style={styles.card} >
                    <div className="card bg-light mb-3 m-3 w-25">
                      <div className="card-body">
                        <h5 className="card-title">{card.question}</h5>
                        <p className="card-text m-1">{card.answer}</p>
                      </div>
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
        <div className="container p-2">
          <div className="row d-flex justify-content-center">
            <div className="card text-center" style="width: 18rem;">
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
