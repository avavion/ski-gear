import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useState } from "react";

import logo from "../../assets/images/logo/logo.svg";

import fav from "../../assets/images/icons/fav_black.svg";
import busket from "../../assets/images/icons/busket.svg";
import burger from "../../assets/images/icons/burger.svg";

const Header = () => {
  const [isOpen, setOpen] = useState();

  return (
    <header className='header w-100'>
      <Container>
        <div className='header-inner w-100 d-flex-rows'>
          <div className='header-logo'>
            <img src={logo} alt="" />
          </div>
          <div className="burger-menu" onClick={() => setOpen(!isOpen)}>
            <img src={burger} alt="" />
          </div>

          <div className={`header-menu d-flex-rows ${isOpen ? "active" : ""}`}>
            <nav className="header-nav d-flex-rows">
            <Link className="nav_a" to='/'>Главная</Link>
            <Link className="nav_a" to='/catalog'>Каталог</Link>
            <Link className="nav_a" to='/'>Новости</Link>
            </nav>
            
            <div className="header-btns d-flex-rows">
              <Link to='/' className="header-btn">
                <img src={fav} alt="" />
              </Link>
              <Link to="/busket" className="header-btn">
                <img src={busket} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;


