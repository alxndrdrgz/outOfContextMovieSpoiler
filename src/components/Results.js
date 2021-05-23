import { Fragment } from 'react';

const Results = ({gifsArray}) => {

    
    return (
        <Fragment>
            <h1>Intense Foot Trauma: The Movie</h1>
            <div className="gallery">

                {/* <div className="gif-wrapper">
                    <img src={gifUrl1} alt={gifAlt1} />
                </div>

                <div className="gif-wrapper">
                    <img src={gifUrl2} alt={gifAlt2} />
                </div>

                <div className="gif-wrapper">
                    <img src={gifUrl3} alt={gifAlt3} />
                </div> */
                gifsArray.map((gif) => {
                    console.log(gif)
                    return(
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
                // onClick={goHome}
                >Go Back
                </button>
        </Fragment>
    )
}

export default Results