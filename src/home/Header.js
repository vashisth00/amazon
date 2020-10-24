/* eslint-disable jsx-a11y/alt-text */
import '../App.css';
import logo from './amazon.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProductScreen from '../product/ProductScreen';
import HomeScreen from '../landing/HomeScreen';

function Header() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
      }
      const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      }
      return (
        <BrowserRouter>
        <div class="grid-container">
          <header class="header">
            <div class="brand">
              <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/" > <img src={logo} height="25"/></Link>
            </div>
            <div class="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <aside class="sidebar">
            <h3>Shopping Categories</h3>
            <button class="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>
    
              <li>
                <a href="index.html">Shirts</a>
              </li>
    
            </ul>
          </aside>
          <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} /> 
          </div>
      </main>
  <footer className="footer">
    All right reserved. ADesignGuy Clone 
  </footer>
</div>
</BrowserRouter>

  );
    }
  

export default Header;
