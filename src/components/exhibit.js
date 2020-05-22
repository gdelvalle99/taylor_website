import React from "react"
import { Link } from "gatsby"
import exhibitStyles from "./exhibit.module.css"

export default function Exhibit(props) {
  return <div className={exhibitStyles.container}>
    <img className={exhibitStyles.image} src={props.ex} />
  </div>
}
