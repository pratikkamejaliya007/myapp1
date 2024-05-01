import React from 'react'

function Header() {
  return (
    <div>
      <header className="text-light">
      <nav className="navbar navbar-expand-lg bg-none">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            JUDGE <br />
          </a>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ps-4">
                <a className="nav-link active text-center" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center ">Practice Areas</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center">Case Studies</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center">Attorneys</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center">Blog</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link active text-center">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header
