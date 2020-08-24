import React from "react"
import Menu from "../components/menu"
import Logo from "../components/logo"
import { Link, graphql } from "gatsby"
import blogStyle from "./blog.module.css"
import Img from "gatsby-image"

export default function Blog({ data }) {
    const siteTitle = "taylor uchytil"
  return (
    <div>
    <Menu />
    <div className={blogStyle.title}>
    <div className={blogStyle.header}>TAYLOR'S</div>
    <div className={blogStyle.blogHeader}>BLOG</div>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div className={blogStyle.bkg}>
      <hr className={blogStyle.rule}></hr>
      <Link className={blogStyle.links} to={node.fields.slug}>
      <Img className={blogStyle.Image} fluid={node.frontmatter.image.childImageSharp.fluid} />
      <div className={blogStyle.Post}>
      <div className={blogStyle.text}>
      <h3> {node.frontmatter.title}{" "}
      <span> - {node.frontmatter.date}
      </span>
      </h3>
      <p>{node.excerpt}</p>
      </div>
      <div>

      </div>
      </div>
      </Link>
      </div>
    ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
