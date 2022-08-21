import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi/index.js";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(true);

    //  Función para abrir y cerrar el menu
    const handleClickMenu = () => setOpenMenu(!openMenu);

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="navbar-logo-container">
                    <a href="/">
                        <img className="navbar-logo" src="logo.png" alt="Adeline logo" />
                    </a>
                    <span className="navbar-menu" onClick={handleClickMenu} >
                        {openMenu ? <HiMenu className="navbar-menu-icon" /> :
                            <HiX className="navbar-menu-icon" />}
                    </span>
                </div>
                <ul className={(openMenu? 'navbar-item-close' : 'navbar-item-open') + ' navbar-item-list'}>
                    <li className="relative w-min">
                        <a className="navbar-item group inicio active" href="#" onClick={() => setOpenMenu(true)}>
                            <span>Inicio</span>
                            <span className="item-hover-l"></span>
                            <span className="item-hover-r"></span>
                        </a>
                    </li>
                    <li className="relative w-min">
                        <a className="navbar-item group servicios" href="#servicios" onClick={() => setOpenMenu(true)}>
                            <span>Servicios</span>
                            <span className="item-hover-l"></span>
                            <span className="item-hover-r"></span>
                        </a>
                    </li>
                    <li className="relative w-min">
                        <a className="navbar-item group contacto" href="#contacto" onClick={() => setOpenMenu(true)}>
                            <span>Contacto</span>
                            <span className="item-hover-l"></span>
                            <span className="item-hover-r"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar