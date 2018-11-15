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
              this.props.cards.map((card, index) => {
                const id = card.id
                return (
                  <div id={id} key={index} className="card border-light m-2 shadow-lg" style={styles.card}>
                    <div className="card-body">
                      <h6 className="card-title">{card.question}</h6>
                      <p className="card-text">{card.answer}</p>
                      <a href={`#edit?cardId=${id}`} className="far fa-edit mx-1"></a>
                      <a href="#list"><i onClick={this.props.deleteCard} className="far fa-trash-alt mx-1" id={id}></i></a>
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
        <div className="d-flex justify-content-center mt-5">
          <div
            className="text-center mt-3">
            <div className="h1">You have no flash cards</div>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg btn-block mt-5 shadow-lg">
              <a
                href="#create"
                style={styles.button}>Create One</a>
            </button>
          </div>
        </div>
      )
    }
  }
}
