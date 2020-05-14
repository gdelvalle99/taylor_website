import React from "react"
import { Link } from "gatsby"
import featureStyles from "./feature.module.css"

export default function Feature(props) {
  return <div className={featureStyles.container}>
  <div className={featureStyles.ft}>
    <div className={featureStyles.imgs}>
    <a target="_blank" href={props.link}>
      <img src={props.cover} />
    </a>
    </div>
    <div className={featureStyles.texts}>
      <img src={props.text} />
    </div>
  </div>
  </div>
}
