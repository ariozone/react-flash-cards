import React from 'react'
export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto mb-5 w-75 border-light shadow-lg" id="navbarColor03">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-center" href="#list">My Flashcards</a></li>
          <li className="nav-item ">
            <a className="nav-link text-center" href="#create">Create a Flashcard</a></li></ul>
      </div>
    </nav>
  )

}
