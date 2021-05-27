import { Fragment } from 'react';
import giphyLogo from '../styles/assets/giphy-logo.png'

const Results = ({ gifsArray, splashState, movieTitle, movieOverview, setMoviesArray }) => {

    const handleClick = () => {
        splashState();
        setMoviesArray([])
    }

    return (
        <Fragment>
            <div className="gallery-background">
                <div className="wrapper">
                    <h1>{movieTitle}</h1>
                    <div className="gallery">

                        {
                            gifsArray.map((gif) => {
                                return (
                                    <div key={gif.key} className="gif-wrapper">
                                        <img src={gif.url} alt={gif.alt ? gif.alt : `A gif representing ${movieTitle}`} />
                                    </div>

                                )
                            })
                        }

                    </div>

                    <div className="movie-overview">
                        <p>{movieOverview}</p>
                        <a href="https://developers.giphy.com/"><img className="giphy-logo" src={giphyLogo} alt="Powered by Giphy"></img></a>
                        
                    </div>
                    <button
                        className="clear-button"
                        onClick={handleClick}
                    >Go Back
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Results