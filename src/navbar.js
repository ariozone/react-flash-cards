import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
      <a className="navbar-brand" href="#">Pokemon</a>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#new">Create a New Flashcard</a>
          <a className="nav-item nav-link" href="#card">My Flashcards</a>
        </div>
      </div>
    </nav>
  )
}
