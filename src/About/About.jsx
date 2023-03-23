import React, { useEffect } from 'react'
import "./style.scss"
import ReactPlayer from 'react-player'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.to(".h3", {opacity:1, x:1300, duration:2, scrollTrigger: {
            trigger:".h3",
            scrub:true
        } })
    })



  return (
    <>
    <div className="about" data-scroll-section>
         <h3 className="h3">MY PROJECTS</h3>
       

        <div className="project-conatain">
            <h2 className="project-contain-h2">01_ Art objects</h2>
            <p className="project-contain-p">As a proficient developer, I have expertly designed and developed a polished landing page featuring smooth scrolling, visually-stunning animations, and exceptional user experience, guaranteeing a captivating and immersive browsing experience for your audience.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
           <a href="https://github.com/ayaOaya/archetect_landingPage"> <ReactPlayer url='./public\vedeo\Archetecture landing page et 2 pages de plus - Profil 1 – Microsoft​ Edge 2023-03-20 15-35-24.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">02_ University</h2>
            <p className="project-contain-p">I have meticulously crafted a sleek and highly-functional landing page for a university website, skillfully integrating pertinent information while also elevating the overall user experience with a visually appealing design, resulting in a seamless and engaging browsing experience for users.



</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
           <a href="https://github.com/ayaOaya/university_project"> <ReactPlayer url='.\public\vedeo\Vite + React - Profil 1 – Microsoft​ Edge 2023-03-22 19-08-59.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">03_ Company</h2>
            <p className="project-contain-p">I have successfully built a dynamic and polished company website, boasting seamless scrolling functionality and an exceptional user experience, complemented by a striking array of smooth and visually engaging animations that are expertly integrated into the scrolling experience, ensuring a captivating and immersive browsing experience for all visitors.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
           <a href="https://github.com/ayaOaya/rent_landingPage"> <ReactPlayer url='.\public\vedeo\Vite + React et 1 page supplémentaire - Profil 1 – Microsoft​ Edge 2023-03-20 06-22-13.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">04_ Gallery</h2>
            <p className="project-contain-p">I have expertly crafted a gallery website that seamlessly combines a powerful and meaningful message with a modern user interface, accentuated by a series of seamlessly integrated smooth animations, resulting in an immersive and captivating browsing experience that is sure to resonate with users.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
            <a href="https://github.com/ayaOaya/gallery--project"><ReactPlayer url='.\public\vedeo\Vite + React et 1 page supplémentaire - Profil 1 – Microsoft​ Edge 2023-03-20 15-33-46.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">05_ An agency</h2>
            <p className="project-contain-p">I have designed and developed a stunning model agency website, featuring a simple yet highly effective user experience that is both intuitive and visually appealing, ensuring that visitors are engaged and captivated from the moment they arrive on the site.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
            <a href="https://github.com/ayaOaya/orange"><ReactPlayer url='.\public\vedeo\Document et 3 pages de plus - Profil 1 – Microsoft​ Edge 2023-03-20 06-26-23.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">06_ Hotel</h2>
            <p className="project-contain-p">I have developed a visually appealing and user-friendly animation to enhance the overall aesthetic and functionality of a hotel website.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
           <a href="https://github.com/ayaOaya/hotel_booking"> <ReactPlayer url='.\public\vedeo\React App et 3 pages de plus - Profil 1 – Microsoft​ Edge 2023-03-20 23-26-00.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">07_ Space X</h2>
            <p className="project-contain-p">I designed an aesthetically pleasing website that retrieves data from the SpaceX API and effectively presents it to the user. My motivation for developing this website stems from a desire to expand my understanding and familiarity with diverse environments, as well as to hone my skills in working with complex data sources.
</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
           <a href="https://github.com/ayaOaya/spacex-api"><ReactPlayer url='.\public\vedeo\Space X info et 5 pages de plus - Profil 1 – Microsoft​ Edge 2023-03-20 15-28-56.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>

        <div className="project-conatain">
            <h2 className="project-contain-h2">08_ Layout</h2>
            <p className="project-contain-p">I have successfully crafted a visually stunning and highly functional landing page, featuring seamless and easy scrolling functionality that is enhanced by a range of cool and trendy animations, resulting in a highly engaging and immersive browsing experience for users.</p>
            <div className="git-icon"></div>
            {/* here goes the website vedeo */}
            <div className="vedeo">
            <a href="https://github.com/ayaOaya/demo04"><ReactPlayer url='.\public\vedeo\3D Folded Layout _ Demo 4 _ Codrops - Profil 1 – Microsoft​ Edge 2023-03-20 06-30-24.mp4' playing={true} autoPlay={true} controls={true} loop={true} width={990} height={660} /></a>
            </div>
        </div>


        </div>
    </>
  )
}
