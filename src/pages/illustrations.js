import React from "react"
import Layout from "../components/Layout"
import { illustration } from "../styles/illustrations.module.css"
import one from "../img/1.jpg"
import two from "../img/2.jpg"
import three from "../img/3.jpg"
import four from "../img/4.jpg"
import five from "../img/5.jpg"
import six from "../img/6.jpg"
import seven from "../img/7.jpg"
import eight from "../img/8.jpg"
import nine from "../img/9.jpg"

export default function illustrations() {
  const artworks = [
    {
      img: `url(${one})`,
    },
    {
      img: `url(${two})`,
    },
    {
      img: `url(${three})`,
    },
    {
      img: `url(${four})`,
    },
    {
      img: `url(${five})`,
    },
    {
      img: `url(${six})`,
    },
    {
      img: `url(${seven})`,
    },
    {
      img: `url(${eight})`,
    },
    ,
    {
      img: `url(${nine})`,
    },
  ]

  return (
    <div>
      <Layout>
        <div className={illustration}>
          {artworks.map(art => (
            <div
              style={{
                backgroundImage: art.img,
              }}
            ></div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
