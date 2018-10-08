import React from 'react'
const styles = {
  card: {width: '18rem'}
}
export default class CardsList extends React.Component {
  render() {
    return (
      <div className="container p-2">
        <div className="row d-flex justify-content-center">
          {
            this.props.cards.map((card, number) => {
              const id = card.id
              // const link = `#edit?card=${id}`
              return (
                <div key={id} className="card" style={styles.card} >
                  <div className="card-body">
                    <h5 className="card-title">Q:  {card.question}</h5>
                    <h6 className="card-text">A:  {card.answer}</h6>
                    <a href= {`#edit?cardId=${id}`} className="far fa-edit"></a>
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

}
