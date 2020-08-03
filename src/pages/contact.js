import React from "react"
import Menu from "../components/menu"
import ImageComponent from "../components/ImageComponent"
import globalStyle from "./global.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from 'react-modal'
import Images from "../components/images"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns:`repeat(auto-fill, 200px)`,
  margin: '10px',
};


export default function Contact({ data }) {

  return <div>
  <Menu />
  <Images />
  </div>
}


export const query = graphql`
  query{
    allFile(
      sort: {fields: dir}
      filter: {
        absolutePath: { regex: "/gallery/"}
      })
      {
        edges {
        node{
          id
          childImageSharp{
        # Specify the image processing specifications right in the query.
          fluid(maxWidth: 200, maxHeight: 200) {
            src
          ...GatsbyImageSharpFluid
          }
        }
        }
      }
    }
  }
`
