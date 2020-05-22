import React from "react"
import Menu from "../components/menu"
import Logo from "../components/logo"
import { Link, graphql } from "gatsby"
import blogStyle from "./blog.module.css"

export default function Blog({ data }) {
    const siteTitle = "taylor uchytil"
  return (
    <div>
    <Menu />
    <Logo />
    <h1 className={blogStyle.header}>Blog</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
      <Link to={node.fields.slug}>
      <h3> {node.frontmatter.title}{" "}
      <span> - {node.frontmatter.date}
      </span>
      </h3>
      <p>{node.excerpt}</p>
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
