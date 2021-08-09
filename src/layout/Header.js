function Header() {
    return(
        <nav className="blue-grey darken-4" style={{padding: '0 15px'}}>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">The Breaking Bad App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="!#">Repo</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;