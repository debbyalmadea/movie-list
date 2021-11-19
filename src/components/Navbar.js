const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>T20 Movie List</h1>
            <div className="links">
                <a href="/movie-list">Home</a>
                <a href="/movie-list/wish-list">Wish List</a>
            </div>
        </nav>
    )
}

export default Navbar;