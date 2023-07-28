import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function Header(props) {

    let localData = localStorage.getItem("loginstatus");

    let cartData = useSelector((state) => state.card);

    let countCart = 0;

    if (countCart.item) {
        countCart = cartData.item.reduce((acc, v, i) => acc + v.qty, 0);
    }

  
    console.log(cartData);

    const handlelogout = () => {
        localStorage.removeItem("loginstatus")
    }

    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to={"/"} >Home</Link></li>
                            <li><Link className="nav-link scrollto" to={"/Departments"} >Departments</Link></li>
                            <li><Link className="nav-link scrollto" to={"/Doctors"} >Doctors</Link></li>
                            <li><Link className="nav-link scrollto" to={"/about"}>About</Link></li>
                            <li><Link className="nav-link scrollto" to={"/Contact"}>Contact</Link></li>
                            <li><Link className="nav-link scrollto" to={"/mediciandisplay"}>medicine</Link></li>
                            <li><Link className="nav-link scrollto" to={"/counter"}>counter</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* <Link to={"/newcart"}>new card</Link> */}
                    <Link to="/cart">
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={countCart} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                    <Link to={'/Appointment'} href="./pages/appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</Link>
                    {
                        localData ?
                            <Link to={'/'} href="#" className="appointment-btn scrollto" onClick={handlelogout}>
                                <span className="d-none d-md-inline">logout</span>
                            </Link> :
                            <Link to={'/auth1'} href="#" className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </Link>
                    }

                </div>
            </header>
        </div>

    );
}

export default Header;