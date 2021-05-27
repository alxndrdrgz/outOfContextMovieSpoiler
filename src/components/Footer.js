//Footer.js
import { Fragment } from 'react';
import tmdbLogo from '../styles/assets/tmdb-logo.svg'

const Footer = () => {
    const alexUrl = "https://alxndrdrgz.com"
    const geoffUrl = "https://geoffreypayton.com"
    const samUrl = "https://samwells.dev"
    const williamUrl = "https://WilliamScript.com"
    const junoUrl = "https://junocollege.com"

    return (
        <Fragment>
            <footer>
                <div className="wrapper">
                    <p>
                        Made by:
                        <a href={alexUrl}>Alex</a>,
                        <a href={geoffUrl}>Geoff</a>,
                        <a href={samUrl}>Sam</a>,
                        <a href={williamUrl}>William</a> at
                        <a href={junoUrl}>Juno College</a>
                    </p>
                    <p className="api-attribution">
                        This product uses the <span className="sr-only">TMDb API </span> <a href="https://www.themoviedb.org/"><img class="tmdb-logo" src={tmdbLogo} alt="logo for The Movie Database"></img></a> API but is not endorsed or certified by TMDB.
                    </p>

                    <p className="icon-attribution">Icon created by Larea from Noun Project</p>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;