import React from "react"
import Menu from "../components/menu"
import globalStyle from "./global.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"


const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns:`repeat(auto-fill, 200px)`,
  margin: '10px'
};

export default function Contact({ data }) {
  return <div>
  <Menu />
  <div style={imgGridStyle}>
  {data.allFile.edges.map(edge =>
    <Img className={globalStyle.myImg} fluid={edge.node.childImageSharp.fluid} alt=""/>
  )}
  </div>
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
          ...GatsbyImageSharpFluid
          }
        }
        }

      }
    }
  }
`
