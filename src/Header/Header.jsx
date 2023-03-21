import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Header() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.to(".header", {opacity:1,duration:1, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" })
        gsap.to(".title", {opacity:1, clipPath:"polygon(0% 0%, 99% 0%, 100% 100%, 0% 100%)", delay:1.4, duration:1 })
        gsap.to(".title-desc", { opacity:1, duration:1, delay:1.8, scrollTrigger:{trigger:".title-desc"}})
        gsap.to(".h3-desc", { opacity:1, x:-330, duration:4, scrollTrigger: {trigger:".h3-desc",scrub:true}})
        gsap.to(".h2-desc", { opacity:1, delay:1, duration:1, scrollTrigger:{trigger:".h2-desc"}})
    })
  return (
    <>
    <div className="header" data-scroll-section>
        <div className="titles">
        <h1 className="title">AYA <br /> AGNAU</h1>
        <p className="title-desc">A passionate front-end developer and UI/UX designer dedicated to creating modern and seamless user experiences.</p>
        </div>

        {/* the description part */}
        <div className="desc">
        <h3 className="h3-desc">ABOUT ME</h3>
        <h2 className="h2-desc">I am a dedicated coder with a passion for building exceptional digital experiences. As an individual who takes pride in creating fabulous things, I am also deeply interested in the field of web design. I believe that my combination of technical skills and design knowledge will allow me to craft engaging and innovative websites that will leave a lasting impression on users.</h2>
        </div>

       
    </div>

    </>
  )
}
