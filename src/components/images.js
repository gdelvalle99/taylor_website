import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Images = () => (
  <StaticQuery
    query={graphql`
      query{
        gallImages: allFile(
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
              fluid {
                src
              ...GatsbyImageSharpFluid
              }
            }
            }
          }
        }
      }
    `}
    render={data => <Lightbox gallImages={data.gallImages.edges} />}
  />
)
export default Images
