import React, {useState,useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';
import Logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    //  mobile menu state
    const [sidenav, setSidenav]= useState(false);

    // desktop fixed menu
    const [sticky, setSticky] = useState(false);  

    // mobile Icon
    const menuIcon =  <FontAwesomeIcon icon= {faBars} />
    
    const sidenavShow = ()=>{
        setSidenav(!sidenav);
    }

    // Scroll fixed Navbar

    useEffect(()=>{
        const handleScroll = ()=>{
            setSticky(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
  return (
    <header id='site_header' className={`${sticky ? "sticky" : ''}`}>
    <div className="container">
    <nav className="navbar" id='Navbar'>
    <div className="navbar_brand">
    <a href="/">
    <img src={Logo} alt="logo" />
    </a>
    </div>
    <div className="navbar_toggler" onClick={sidenavShow}>
      {menuIcon}
    </div>

    <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
    <ul>
     <li><Link to="home"  spy={true}  smooth={true}> Home </Link></li>
      <li><Link  to="about"  spy={true}  smooth={true}> About Us </Link></li>
      <li><Link  to="services"  spy={true}  smooth={true}> Services </Link></li>
      <li><Link  to="blog"  spy={true}  smooth={true}> Blogs </Link></li>
      <li><Link  to="contact"  spy={true}  smooth={true}> Contact US </Link></li>
    </ul>
    </div>
    </nav>
    </div>
    </header>
    
  )
}

export default Navbar
