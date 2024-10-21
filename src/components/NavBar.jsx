import CartWidget from "./CartWidget";
import "./NavBar.css";
import Logo from "./assets/logo.svg";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo empresa" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
          </ul>
        </div>
        <div className="widget">
          <CartWidget />
        </div>
      </div>
    </>
  );
}
