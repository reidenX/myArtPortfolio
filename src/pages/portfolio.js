import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { project } from "../styles/portfolio.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function portfolio() {
  const cardDetails = [
    {
      name: "Illustrations",
      link: "/illustrations",
      price: "$25",
    },
    {
      name: "Comics",
      link: "",
      price: "Coming Soon...",
    },
    {
      name: "Animations",
      link: "",
      price: "Coming soon...",
    },
  ]

  return (
    <div>
      <Layout>
        <div className={project}>
          {cardDetails.map(card => (
            <div className={card.name}>
              <h1>{card.name}</h1>
              <p>{card.price}</p>
              <span>
                <Link to={card.link}>open</Link>
                <FontAwesomeIcon icon={faArrowDown} inverse width={7} />
              </span>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
