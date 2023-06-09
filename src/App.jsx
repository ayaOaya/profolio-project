import About from './About/About'
import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import useLocolScroll from './hooks/useLocolScroll'
import Lenis from '@studio-freight/lenis';


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function App() {
 useLocolScroll();

  return (
    <div className="App" id='main-container' data-scroll-container>

    <Header />
    <About />
    <Footer />

    </div>
  )
}

export default App
