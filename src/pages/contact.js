import React from "react"
import Menu from "../components/menu"
import { graphql } from "gatsby"
import Images from "../components/images"
import { Helmet } from "react-helmet"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns:`repeat(auto-fill, 200px)`,
  margin: '10px',
};


export default function Contact({ data }) {

  return <div>
    <Helmet>
        <title>taylor uchytil</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
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
