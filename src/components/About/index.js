import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgRouteClassName = isDarkTheme ? 'bg-container-dark' : null

      const routeNameClassName = isDarkTheme
        ? 'route-name-dark'
        : 'route-name-light'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${bgRouteClassName}`}>
            <img src={aboutImage} alt="about" className="route-image" />
            <h1 className={routeNameClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
