import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { aboutPage } from "../styles/about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function about() {
  return (
    <div>
      <Layout>
        <div className={aboutPage}>
          <h1>My Story</h1>
          <p>
            I started my digital art journey this late 2020 but I was already
            doing artworks since primary school. I joined poster making
            contests, traditional painting, and cartooning. Although I didn't
            always win, I still benefitted from the experience and it was fun
            too.
          </p>
          <h1>Tools I Use</h1>
          <ul>
            <li>Clip Studio Paint Pro</li>
            <li>Krita</li>
            <li>Huion 1060p new</li>
          </ul>
          <h1>My Socials</h1>
          <Link to="https://www.instagram.com/bitetochew_arts/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            Art Account
          </Link>
          <Link to="https://www.instagram.com/reiden_teiko/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            Personal Account
          </Link>
        </div>
      </Layout>
    </div>
  )
}
