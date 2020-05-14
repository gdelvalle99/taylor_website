import React from "react"
import girl from '../media/girl-4.png'
import logoStyles from "./logo.module.css"

export default function Logo() {
  return <div className={logoStyles.container}>
          <div className={logoStyles.name}>
            <div className={logoStyles.first_name}>TAYLOR</div>
            <div className={logoStyles.last_name}>UCHYTIL</div>
          </div>
          <div>
          <div className={logoStyles.logo_img}>
            <img className={logoStyles.image} src={girl}/>
          </div>
        </div>
        </div>
}
