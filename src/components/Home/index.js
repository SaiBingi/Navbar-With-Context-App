import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const bgRouteClassName = isDarkTheme ? 'bg-container-dark' : null

      const routeNameClassName = isDarkTheme
        ? 'route-name-dark'
        : 'route-name-light'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${bgRouteClassName}`}>
            <img src={homeImage} alt="home" className="route-image" />
            <h1 className={routeNameClassName}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
