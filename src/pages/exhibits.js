import React from "react"
import Menu from "../components/menu"
import {css} from "@emotion/core"
import exhibitone from "../media/jasmyne.png"
import exhibittwo from "../media/comingsoon.png"
import exhibitthree from "../media/countingrams.png"
import exhibitfour from "../media/myeyes.png"
import exhibitfive from "../media/garden.png"
import exhibitsix from "../media/normab.png"
import exhibitseven from "../media/ballerina.png"
import exhibiteight from "../media/doris.png"
import exhibitnine from "../media/tulle.png"
import exhibitten from "../media/remainder.png"

import Exhibit from "../components/exhibit"
export default function Exhibits() {
  return ( <div css={css`margin-bottom:10%;`}>
    <Menu />
    <Exhibit ex={exhibitone} />
    <Exhibit ex={exhibittwo} />
    <Exhibit ex={exhibitthree} />
    <Exhibit ex={exhibitfour} />
    <Exhibit ex={exhibitfive} />
    <Exhibit ex={exhibitsix} />
    <Exhibit ex={exhibitseven} />
    <Exhibit ex={exhibiteight} />
    <Exhibit ex={exhibitnine} />
    <Exhibit ex={exhibitten} />
    </div>
  )
}
