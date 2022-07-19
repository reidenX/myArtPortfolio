import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="body">{children}</div>
      <Footer />
    </div>
  )
}
