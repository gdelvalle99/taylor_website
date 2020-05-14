import React from "react"
import Menu from "../components/menu"
import Feature from "../components/feature"
import faddy_text from "../media/faddy_mag.png"
import faddy_cover from "../media/link1.jpg"
import fashion_text from "../media/fashion_magazine_nyc.png"
import fashion_cover from "../media/link3.png"
import daily_text from "../media/daily_mail.png"
import daily_cover from "../media/link2.jpg"
import sagebrush_text from "../media/nevada_sage_brush.png"
import sagebrush_cover from "../media/link4.jpg"
import globalStyle from "../styles/global.css"
export default function Features() {
  return (
    <div>
      <Menu />
      <Feature link="https://faddymag.com/2019/10/11/issue-13-showcase-4/" cover={faddy_cover} text={faddy_text} />
      <Feature link="https://www.fashionmagazinenyc.com/post/taylor-uchytil-nyfw-2020-pier-59" cover={fashion_cover} text={fashion_text} />
      <Feature link="https://www.dailymail.co.uk/femail/article-7580887/The-worlds-professional-catwalk-model-Downs.html" cover={daily_cover} text={daily_text} />
      <Feature link="http://nevadasagebrush.com/blog/2018/10/08/19-year-old-reno-fashion-designer-invited-to-new-york-fashion-week-2019/?fbclid=IwAR114UE5z6-vSG755JaZ69dv0jxVF9Rh4bc47H0uLmHJQrcCk9OKHQCthGY" cover={sagebrush_cover} text={sagebrush_text} />
    </div>
  )
}
