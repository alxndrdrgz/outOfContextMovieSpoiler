//SplashPage.js component containing header, description, and form inputs
// import { getByTitle } from '@testing-library/dom';
import { Fragment, useState } from 'react';


const SplashPage = ({noKeywords, noMovies, onSubmit, moviesArray, getKeywords, getOverview, getTitle, loadingState }) => {

  //Declaring useState for form element 
  const [userInput, setUserInput] = useState('');

  //Handle change function. Every time something is typed in text input field it is set as the value to use for search query.  
  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  // Function that passes user input to the onSubmit function which makes the call to the movieDb search endpoint
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(userInput);

    setUserInput('');
  }

  // Creates the eventhandler that passes the id and overview to the functions that saves them to their respective states
  const handleClick = (movie) => {
    getKeywords(movie.id)
    getOverview(movie.overview)
    getTitle(movie.title)
    loadingState();

  }

  return (
    <Fragment>
      <div className="splash-background">
        <div className="wrapper splash-flex">
          <div className="splash-content">
            <header>
              <h1>
                Out of <span className="context-style">Context</span> Movie Spoiler
                            </h1>
              <p>
                The world moves too fast and you can get lost in the chaos. We’ve created an app that summarizes movie plots in 3 gifs. Go ahead and enter a movie title below to get started!
                            </p>
            </header>
            <main>
              <form
                action=""
                onSubmit={handleSubmit}
              >
                <label htmlFor="movieInput" className="sr-only">

                </label>
                <input
                  className={noMovies || noKeywords? "no-movies" : null}
                  required
                  type="text"
                  id="movieInput"
                  name="movieInput"
                  value={userInput}
                  onChange={handleChange}
                  placeholder={noMovies || noKeywords? "Uh Oh!!!" : "Maybe try Blade Runner..."}
                  >
                </input>
                <button
                  type="submit"
                >
                  Submit
                                </button>
              </form>

              <div className="results-buttons">
                {noMovies || noKeywords? <p className="error-message">Insufficient data, try another title!</p> : 
                  moviesArray.map(movie => {
                    return (
                      <button
                        key={movie.id}
                        id={movie.id}
                        onClick={() => { handleClick(movie) }}
                      >
                        {`${movie.title}
                                              (${movie.release_date})`}
                      </button>
                    )
                  })
                }
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SplashPage;