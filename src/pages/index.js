import React from "react"
import Menu from "../components/menu"
import Logo from "../components/logo"
import globalStyle from "./global.module.css"
import { css } from "@emotion/core"
import mainVideo from "../media/mainVideo.mp4"
import contact from "../media/contact.png"
import abtMeArtboard from "../media/abt-me-for-site.png"
import { Helmet } from "react-helmet"

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
        <p>serving independent artists across the globe: October 2018</p>
        </div>
        <div className={globalStyle.second}>
        <p>VOLUNTEER EXPERIENCE</p>
        <p>- Reno Fashion Show-featured event in</p>
        <p>Artown with proceeds benefitting The</p>
        <p>Children's Cabinet</p>
        <p>- On Common Ground-grassroots 501c3</p>
        <p>focused on ending hunger and reducing food waste</p>
        <p>- 10th annual Idols and Icons: to benefit</p>
        <p>Down Syndrome Network (later inspiring </p>
        <p>collaboration with Madeline Stuart, </p>
        <p>supermodel and activist with Down Syndrome)</p>
        </div>
      </div>
    <div className={globalStyle.bottom_text}>
      <p className={globalStyle.fashion_text}>FASHION DESIGN</p>
      <p className={globalStyle.amp_text}>&</p>
      <p className={globalStyle.creat_text}>CREATIVE DIRECTION</p>
    </div>
    <div className={globalStyle.last_par}>
    <p css={{
      textIndent: '2vw'
    }}>    As a designer, I represent women and challenge the</p>
      <p>stereotypes built around the fashion industry. My brand's</p>
      <p>culture and identity are rooted in diversity and inclusivity.</p>
      <p css={{
        textIndent: '2vw'
      }}>    With the construction of over twenty five designs (and </p>
      <p>counting) for runways, I am able to express my interpretation</p>
      <p>and distinct understanding of fashion.</p>
      <p css={{
        textIndent: '2vw'
      }}>    In every runway look, there are countless hours of </p>
      <p>researching, designing, and sewing. Before the dresses </p>
      <p>are filled by models walking the runway, meticulous efforts </p>
      <p>have been put forth in cassting, visuals, audio, choreography, </p>
      <p>and more. With over twenty-five designs and counting, I am able </p>
      <p>to expres my distinct interpretation of fashion.</p>
      <p css={{
        textIndent: '2vw'
      }}>   A special thank you to my models, hairstylists, make-up artists, </p>
      <p>and other industry professionals. Every moment I spend with you</p>
      <p>is a dream come true. </p>
  </div>
  </div>
  </div>
  </div>
}






export default function Home() {
  return (
    <div className={globalStyle.bigcontainer}>
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
