import React from "react"
import Menu from "../components/menu"
import globalStyle from "./global.module.css"
import contact from "../media/contact.png"

export default function Contact() {
  return <div>
  <Menu />
  <img className={globalStyle.contact} src={contact} />
  </div>
}
