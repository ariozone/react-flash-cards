import React from 'react'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#list">My Flashcards</a>
          <a className="nav-item nav-link" href="#create">Create Flashcard</a>
        </div>
      </div>
    </nav>
  )
}
