import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div className="bg-black">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
