import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgRouteClassName = isDarkTheme ? 'bg-container-dark' : null
      const errorMsg1ClassName = isDarkTheme
        ? 'lost-your-way-dark'
        : 'lost-your-way-light'

      const errorMsg2ClassName = isDarkTheme
        ? 'error-msg-dark'
        : 'error-msg-light'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${bgRouteClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={errorMsg1ClassName}>Lost Your Way?</h1>
            <p className={errorMsg2ClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
