import React from "react"
import { Link } from "gatsby"

import menuStyles from "./menu.module.css"

export default function Menu() {
  return <div className={menuStyles.container}>
  <div className={menuStyles.instagram}>@tayloruchytil</div>
  <div className={menuStyles.nav}>
    <div className={menuStyles.dropdown}>
      <button className={menuStyles.dropbtn}>More</button>
      <div className={menuStyles.dropcontent}>
        <Link to="/features/">Features</Link>
        <Link to="/blog/">Blog</Link>
      </div>
    </div>
    <Link to="/contact/">Gallery</Link>
    <Link to="/exhibits/">Exhibits</Link>
    <Link to="/">About</Link>
  </div>
  </div>
}
