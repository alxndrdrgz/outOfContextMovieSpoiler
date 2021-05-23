import { Fragment } from 'react';

const Results = ({ gifsArray, splashState, movieTitle, movieOverview, setMoviesArray }) => {

    const handleClick = ()=> {
        splashState();
        setMoviesArray([])
    }

    console.log(gifsArray.length)
    return (
        <Fragment>
            <h1>{movieTitle}</h1>
            <div className="gallery">

                {
                    gifsArray.map((gif) => {
                        console.log(gif)
                        return (
                            <div className="gif-wrapper">
                                <img src={gif.url} alt={gif.alt} />
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
        </Fragment>
    )
}

export default Results