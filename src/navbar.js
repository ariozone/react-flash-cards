import React from 'react'
export default function Navbar() {
  return (

    <nav className="navbar-expand-lg navbar-light bg-light mx-auto mb-5 p-3 border-light shadow-lg" id="navbarColor03">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <a className="navbar-brand"><i className="fas fa-user-astronaut px-3 fa-2x"></i>MyQuizSpace</a>
          <li className="nav-item">
            <a className="nav-link text-center" href="#list">My Flashcards</a></li>
          <li className="nav-item ">
            <a className="nav-link text-center" href="#create">Create a Flashcard</a></li>
          <li className="nav-item ">
            <a className="nav-link text-center" href="#create">Practice</a></li></ul>
      </div>
    </nav>
  )

}
