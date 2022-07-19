import React from "react"
import Layout from "../components/Layout"
import { home } from "../styles/home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={home}>
          <h1>Bitetochew Arts</h1>
          <p>I will draw your imagination</p>
          <a href="mailto:denlovegrown@gmail.com">
            <button>Inquire</button>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </Layout>
    </div>
  )
}
