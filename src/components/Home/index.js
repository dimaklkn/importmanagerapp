import './index.scss'
import Loader from 'react-loaders'
import FullLogo from '../../assets/images/full-logo.png'
import Container from '../../assets/images/homecontainer.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const hArray = ['I', 'm', 'p', 'o', 'r', 't']

  const hArray2 = ['D', 'e', 'p', 'a', 'r', 't', 'm', 'e', 'n', 't']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <img src={FullLogo} alt="logo" /> <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hArray2}
              idx={22}
            />
          </h1>
          <h2>
            Here you can find some useful <br /> information about our import
          </h2>
          <Link to="contact" className="flat-button">
            CONTACT US
          </Link>
        </div>
        <div className="stage-container">
          <img src={Container} alt="cargo-container" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
