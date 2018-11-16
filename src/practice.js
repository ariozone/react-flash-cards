import React from 'react'
export default class Practice extends React.Component {
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
              <h6 className="card-title mt-3">Question</h6>
              <p className="card-text">Answer</p>
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
