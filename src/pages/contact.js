import React from "react"
import Menu from "../components/menu"
import ImageComponent from "../components/ImageComponent"
import globalStyle from "./global.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from 'react-modal'


const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns:`repeat(auto-fill, 200px)`,
  margin: '10px',
};


export default function Contact({ data }) {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return <div>
  <Menu />
  <div style={imgGridStyle}>
  {data.allFile.edges.map(edge =>
    <div onClick={openModal}>
    <Img className={globalStyle.myImg} fluid={edge.node.childImageSharp.fluid} alt=""/>
    <Modal id='main'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <Img className={globalStyle.myImg} fluid={edge.node.childImageSharp.fluid} alt=""/>
      <button onClick={closeModal}>close</button>
    </Modal>
    </div>
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
            src
          ...GatsbyImageSharpFluid
          }
        }
        }

      }
    }
  }
`
