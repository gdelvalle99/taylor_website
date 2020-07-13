import React from "react"
import Menu from "../components/menu"
import Logo from "../components/logo"
import globalStyle from "./global.module.css"
import aboutMe from "../media/abtme.png"
import { css } from "@emotion/core"
import mainVideo from "../media/mainVideo.mp4"
import contact from "../media/contact.png"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import EmailListForm from "../components/email"
function AboutMe() {
  return<div>
    <div className={globalStyle.container}>
    <img className={globalStyle.main_img} src={aboutMe} />
    <div className={globalStyle.textcontainer}>
    <div className={globalStyle.topText}>
      <p>SHOWCASED EVENTS / SEASONS</p>
      <p>- New York Fashion Week: February 2020</p>
      <p>- London Fashion Week: September 2019</p>
      <p>- Los Angeles Fashion Week: March 2019</p>
      <p>- New York Fashion Week: February 2019</p>
      <p>- Raw Artists- International art organization serving independent artists across the globe: October 2018</p>
    </div>
    <div className={globalStyle.bottomText}>
      <p>VOLUNTEER EXPERIENCE</p>
      <p>Contributing Designer </p>
      <p>- Reno Fashion Show-featured event in Artown with proceeds benefitting The Children&rsquo;s Cabinet</p>
      <p>- On Common Ground-grassroots 501c3 focused on ending hunger and reducing food waste</p>
      <p>- 10th annual Idols and Icons-to benefit Down Syndrome Network (Inspiring future collaboration with Madeline Stuart, first supermodel with Down Syndrome) </p>
    </div>
    </div>
  </div>
  </div>
}






export default function Home() {
  return (
    <div>
    <Menu />
    <Logo />
    <video className={globalStyle.video} controls muted autoPlay loop>
    <source src={mainVideo} type="video/mp4" />
    </video>
    <img className={globalStyle.main_img} src={aboutMe} />
    <div className={globalStyle.footer}>
    <img className={globalStyle.contact} src={contact} />
    </div>
    </div>
  )
}
