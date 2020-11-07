import React from "react"
import Menu from "../components/menu"
import Logo from "../components/logo"
import globalStyle from "./global.module.css"
import { css } from "@emotion/core"
import mainVideo from "../media/mainVideo.mp4"
import contact from "../media/contact.png"
import abtMeArtboard from "../media/abt-me-for-site.png"
import { Helmet } from "react-helmet"
import {Demo} from "../components/burgermenu"

function AboutMe() {
  return<div>
  <div className={globalStyle.main}>
    <div className={globalStyle.image}>
      <img className={globalStyle.main_image} src={abtMeArtboard}/>
      <div className={globalStyle.image_text}>
        <div className={globalStyle.first}>
        <p>SHOWCASED EVENTS / SEASONS</p>
        <p>- New York Fashion Week: February 2020</p>
        <p>- London Fashion Week: September 2019</p>
        <p>- Los Angeles Fashion Week: March 2019</p>
        <p>- New York Fashion Week: February 2019</p>
        <p>- Raw Artists- International art organization</p>
        <p>serving independent artists across the globe:</p>
        <p>October 2018</p>
        </div>
        <div className={globalStyle.second}>
        <p>VOLUNTEER EXPERIENCE</p>
        <p>- Reno Fashion Show-featured event in</p>
        <p>Artown with proceeds benefitting The</p>
        <p>Children's Cabinet</p>
        <p>- On Common Ground-grassroots 501c3</p>
        <p>focused on ending hunger and reducing food</p>
        <p>waste</p>
        <p>- 10th annual Idols and Icons-to benefit</p>
        <p>Down Syndrome Network (Inspiring future </p>
        <p>collaboration with Madeline Stuart, first</p>
        <p>supermodel with Down Syndrome)</p>
        </div>
      </div>
    <div className={globalStyle.bottom_text}>
      <p className={globalStyle.fashion_text}>FASHION DESIGN</p>
      <p className={globalStyle.amp_text}>&</p>
      <p className={globalStyle.creat_text}>CREATIVE DIRECTION</p>
    </div>
    <div className={globalStyle.last_par}>
    <p css={{
      textIndent: '4vw'
    }}>    As a designer, I represent women. I strive to challenge the</p>
      <p>stereotypes between fashion and humanity. Diversity and</p>
      <p>inclusivity drive my actions as a design and encapsulate my</p>
      <p>brand's culture and identity.</p>
      <p css={{
        textIndent: '4vw'
      }}>    With the construction of over twenty five designs (and </p>
      <p>counting) for runways, I am able to express my interpretation</p>
      <p>and distinct understanding of fashion.</p>
      <p css={{
        textIndent: '4vw'
      }}>    Behind every runway look is garment production,</p>
      <p>including sketching, designing, pattern drafting, sourcing</p>
      <p>materials, sewing, and styling. Showcasing includes</p>
      <p>organizing runway lineups, choreography, audio, and visusals.</p>
      <p>Constantly striving to create a lasting impression among</p>
      <p>audiences.</p>
      <p css={{
        textIndent: '4vw'
      }}>   A special thank you to my runway teams consisting of</p>
      <p>models, hair stylists, make-up artists, and other industry</p>
      <p>professionals. Every moment I spend with you is a dream come</p>
      <p>true.</p>
  </div>
  </div>
  </div>
  </div>
}






export default function Home() {
  return (
    <div>
      <Helmet>
        <title>taylor uchytil</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <Menu />
    <Logo />
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={mainVideo} type="video/mp4" />
    </video>
    <div className={globalStyle.abtcontainer}>
    <AboutMe/>
    </div>
    <div className={globalStyle.footer}>
    <img className={globalStyle.contact} src={contact} />
    </div>
    </div>
  )
}
