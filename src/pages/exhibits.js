import React from "react"
import Menu from "../components/menu"
import {css} from "@emotion/core"
import exhibitone from "../media/remainder.png"
import exhibittwo from "../media/ballerina.png"
import exhibitthree from "../media/comingsoon.png"
import exhibitfour from "../media/countingrams.png"
import exhibitfive from "../media/doris.png"
import exhibitsix from "../media/garden.png"
import exhibitseven from "../media/jasmyne.png"
import exhibiteight from "../media/myeyes.png"
import exhibitnine from "../media/normab.png"
import exhibitten from "../media/tulle.png"

import Exhibit from "../components/exhibit"
export default function Exhibits() {
  return ( <div>
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
