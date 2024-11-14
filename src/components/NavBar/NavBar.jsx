import "./NavBar.css";
import CartWidet from "../CardWidget/CartWidget";
import Logo from "../assets/logo.svg";

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
              <a href="#">Catalogo</a>
            </li>
          </ul>
        </div>
        <div className="widget">
          <CartWidet />
        </div>
      </div>
    </>
  );
}
