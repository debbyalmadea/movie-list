import github from "./github.png"

const Footer = () => {
    return (
        <footer>
            <div clas="credit">
                <img
                class="TMDB"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                />
                <h3 class="notice">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
                </h3>
            </div>
            <div class="author">
                <h3 class="about-author">Find me on</h3>
                <a href="https://github.com/wwwscarlet"><img src={github} className="github"/></a>
            </div>
        </footer>
    )
}

export default Footer;