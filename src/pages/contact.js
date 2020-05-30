import React from "react"
import Menu from "../components/menu"
import globalStyle from "./global.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Contact({ data }) {
  return <div>
  <Menu />
  <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
  </div>
}


export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "gallery/abtme.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
