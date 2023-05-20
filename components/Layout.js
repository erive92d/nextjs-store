import Footer from "./Footer";
import Nav from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
