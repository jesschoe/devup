import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
