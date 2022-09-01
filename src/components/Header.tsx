import React, { useState } from 'react'

type HeaderProps = {
    darkMode: boolean
    handleClick: () => void
}

const Header = (props: HeaderProps) => {

    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(prevMenu => !prevMenu)
    }

    const styles= {
        popup: {
            opacity: menu ? "1" : "0",
        },
        hide: {
            opacity: menu ? "0" : "1",
        },
        rollOut: {
            height: menu ? "132px" : "65px"
        },
        switch: {
            right: props.darkMode? "5%" : "49%"
        }
    }

    return (

        <header style={styles.rollOut} className={props.darkMode? "nav-bar" : "nav-bar nav-bar-light"}>

            <div id="logo">

                <a href="#home-ref">
                    <img style={styles.hide} src={require("../img/LogoLayer1.png")}alt="logo" />
                </a>

            </div>
            
            <div onClick = {openMenu} className="ham-ico">
                <div className={menu ? "stick1-ani" : "stick1"}></div>
                <div className={menu ? "stick2-ani" : "stick2"}></div>
                <div className={menu ? "stick3-ani" : "stick3"}></div>
            </div>

            <div style={styles.popup} onClick={props.handleClick} className={props.darkMode ?"dark-mode-btn" : "dark-mode-btn dark-mode-btn-light"}>
                <span style={styles.switch} className={props.darkMode? "dark-mode-switch" : "dark-mode-switch dark-mode-switch-light"}></span>
            </div>

            <nav className="menu-main">

                <ul style={styles.popup}>

                    <li><a href="#o-webu-ref" className={props.darkMode? "o-webu-btn list-item" : "o-webu-btn-light list-item-light"}>O webu</a></li>

                    <li className={props.darkMode? "nav-menu-button list-item" : "nav-menu-button list-item-light"}><a href="#portfolio-ref">Portfolio</a></li>

                    <li className={props.darkMode? "list-item" : "list-item-light"}><a href="#kontakt-ref">Kontakt</a></li>

                </ul>

            </nav>

        </header>

    )
}

export default Header