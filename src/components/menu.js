import React from "react"
import { Link } from "gatsby"
import EmailListForm from "../components/email"
import menuStyles from "./menu.module.css"




export default function Menu() {
  var state = false;
  function Modal( {state} ){
    if(!state){
      return null;
    }
      return <div>
      <EmailListForm />
      </div>
  };

  return <div className={menuStyles.container}>
  <div className={menuStyles.instagram}>@tayloruchytil</div>
  <button className={menuStyles.subbutton}>Subscribe</button>
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
