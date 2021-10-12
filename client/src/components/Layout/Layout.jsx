import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto w-screen">
      <Nav />
      </div>
      <div className="flex-1 overflow-auto">
        {props.children}
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Layout
