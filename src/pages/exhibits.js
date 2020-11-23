import React from "react"
import Menu from "../components/menu"
import {css} from "@emotion/core"
import globalStyle from "./global.module.css"
import exhibitone from "../media/jasmyne.png"
import exhibittwo from "../media/comingsoon.png"
import exhibitthree from "../media/countingramsupdate.png"
import exhibitfour from "../media/myeyes.png"
import exhibitfive from "../media/garden.png"
import exhibitsix from "../media/normab.png"
import exhibitseven from "../media/ballerina.png"
import exhibiteight from "../media/doris.png"
import exhibitnine from "../media/tulle.png"
import exhibitten from "../media/remainder.png"
import videoone from "../media/comingsoon.mp4"
import videotwo from "../media/myeyes.mp4"
import videothree from "../media/gardner.mp4"
import videofour from "../media/tulle.mp4"
import img1 from "../media/jasmynedresses.png"
import img2 from "../media/comingsoondresses.png"
import img3 from "../media/countingramsdresses.png"
import img4 from "../media/meruhdresses.png"
import img5 from "../media/gardenerdresses.png"
import img6 from "../media/normabdresses.png"
import img7 from "../media/ballerinadresses.png"
import img8 from "../media/dorisdresses.png"
import img9 from "../media/tulledresses.png"
import img10 from "../media/tweeddresses.png"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Exhibit from "../components/exhibit"
import { Helmet } from "react-helmet"

export default function Exhibits() {
  return ( 
  <div css={css`margin-bottom:10%;`}>
    <Helmet>
        <title>taylor uchytil</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
    <Menu />
    <div className={globalStyle.imgcontainer}>
      <div className={globalStyle.within}>
    <AnchorLink to="/exhibits#exhibitone"> <img className={globalStyle.eximage} src={img1} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibittwo"><img className={globalStyle.eximage} src={img2} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitthree"><img className={globalStyle.eximage} src={img3} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitfour"><img className={globalStyle.eximage} src={img4} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitfive"><img className={globalStyle.eximage} src={img5} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitsix"><img className={globalStyle.eximage} src={img6} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitseven"><img className={globalStyle.eximage} src={img7} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibiteight"><img className={globalStyle.eximage} src={img8} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitnine"><img className={globalStyle.eximage} src={img9} /> </AnchorLink>
    <AnchorLink to="/exhibits#exhibitten"><img className={globalStyle.eximage} src={img10} /> </AnchorLink>
    </div>
    </div>
    <div className={globalStyle.bigdiv} >
    <div id="exhibitone">
    <Exhibit ex={exhibitone} />
    </div>
    <div id="exhibittwo">
    <Exhibit ex={exhibittwo} />
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={videoone} type="video/mp4" />
    </video>
    </div>
    <div id="exhibitthree">
    <Exhibit ex={exhibitthree} />
    </div>
    <div id="exhibitfour">
    <Exhibit ex={exhibitfour} />
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={videotwo} type="video/mp4" />
    </video>
    </div>
    <div id="exhibitfive">
    <div className={globalStyle.exhibitFive}>
    <Exhibit id="exhibitfive" ex={exhibitfive} />
    </div>
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={videothree} type="video/mp4" />
    </video>
    </div>
    <div id="exhibitsix">
    <Exhibit ex={exhibitsix} />
    </div>
    <div id="exhibitseven">
    <Exhibit ex={exhibitseven} />
    </div>
    <div id="exhibiteight">
    <Exhibit ex={exhibiteight} />
    </div>
    <div id="exhibitnine">
    <Exhibit ex={exhibitnine} />
    
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={videofour} type="video/mp4" />
    </video>
    </div>
    <div id="exhibitten">
    <Exhibit ex={exhibitten} />
    </div>
    </div>
    </div>
  )
}
