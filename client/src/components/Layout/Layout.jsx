import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = (props) => {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <div className="">
        <Nav />
      </div>
      <div className="flex-col justify-center overflow-hidden align-center items-center bg-background">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
