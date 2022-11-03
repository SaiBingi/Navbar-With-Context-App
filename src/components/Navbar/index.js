import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarClassName = isDarkTheme
        ? 'navbar-container-dark'
        : 'navbar-container-light'

      const navbarItemsClassName = isDarkTheme ? 'route-dark' : 'route-light'

      const onClickToggleTheme = () => toggleTheme()

      return (
        <div className={navbarClassName}>
          <Link to="/" className="link">
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
          </Link>
          <ul className="routes">
            <Link to="/" className="link">
              <li className={navbarItemsClassName}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={navbarItemsClassName}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={onClickToggleTheme}
            className="theme-button"
          >
            <img src={theme} alt="theme" className="website-logo" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
