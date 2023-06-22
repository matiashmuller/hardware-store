import React from "react"
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import logo from '../assets/logo.png'
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div variant="dark" className="container d-flex flex-wrap justify-content-between py-5">
                <div className="col-md-4 col-12 d-flex align-items-center  justify-content-center">
                    <HashLink to="/hardware-store#" title="Inicio" className="text-muted text-decoration-none lh-1">
                        <img src={logo} alt="logo" style={{ height: 50 }} />
                    </HashLink>
                </div>
                <span className="col-md-4 col-12 mt-4 mt-md-1 text-light  text-center">© 2023 PowerHard Hardware, Inc</span>
                <ul className="nav col-md-4 col-12 mt-md-0 mt-4 justify-content-center list-unstyled d-flex ">
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.facebook.com/PowerHardHardware">
                            <Facebook color="#3160df" size={30} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://www.instagram.com/PowerHardHardware">
                            <Instagram color="#3160df" size={30} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://twitter.com/PowerHardHardware">
                            <Twitter color="#3160df" size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;