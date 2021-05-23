import { Fragment } from 'react';

const Results = ({ gifsArray, splashState }) => {

    console.log(gifsArray.length)
    return (
        <Fragment>
            <h1>Intense Foot Trauma: The Movie</h1>
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
                {/* {movieOverview} */}
            </p>
            <button
                className="clear-button"
                onClick={splashState}
            >Go Back
                </button>
        </Fragment>
    )
}

export default Results