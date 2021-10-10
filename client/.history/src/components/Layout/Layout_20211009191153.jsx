import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div clasa>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
