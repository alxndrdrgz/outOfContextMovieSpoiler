import { Fragment } from 'react';

const Results = ({ gifsArray, splashState, movieTitle, movieOverview, setMoviesArray }) => {

    const handleClick = ()=> {
        splashState();
        setMoviesArray([])
    }

    console.log(gifsArray.length)
    return (
        <Fragment>
            <div className="gallery-background">
                <div className="wrapper">
                    <h1>{movieTitle}</h1>
                    <div className="gallery">

                        {
                            gifsArray.map((gif) => {
                                console.log(gif)
                                return (
                                    <div className="gif-wrapper">
                                        <img src={gif.url} alt={ gif.alt? gif.alt : `A gif representing ${movieTitle}`} />
                                    </div>

                                )
                            })
                        }

                    </div>

                    <p className="movie-overview">
                        {movieOverview}
                    </p>
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