import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="https://www.inprnt.com/gallery/reiden/" target="_blank">
            Prints
          </Link>
        </li>
      </ul>
    </nav>
  )
}
