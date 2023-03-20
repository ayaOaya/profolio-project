import React from 'react'
import "./style.scss"

export default function Header() {
  return (
    <>
    <div className="header">
        <div className="titles">
        <h1 className="title">AYA <br /> AGNAU</h1>
        <p className="title-desc">A front end developer and UI/UX designer whose passionate about make smooth and modern user experience</p>
        </div>

        {/* the description part */}
        <div className="desc">
        <h3 className="h3">ABOUT ME</h3>
        <h2 className="h2-desc"><span>Hi,</span>my name is aya agnau and im someone who loves to code and build fabulous things</h2>
        </div>

       
    </div>

    </>
  )
}
