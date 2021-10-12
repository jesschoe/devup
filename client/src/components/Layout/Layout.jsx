import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div className="">
      <Nav />
      </div>
      <div className="flex-col flex-1 justify-center align-center items-center overflow-hidden bg-background">
        {props.children}
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Layout
