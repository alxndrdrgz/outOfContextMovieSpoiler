//SplashPage.js component containing header, description, and form inputs
import { Fragment, useState } from 'react';


const SplashPage = ({ onSubmit, moviesArray, getKeywords, getOverview, loadingState }) => {

    //Declaring useState for form element 
    const [ userInput, setUserInput ] = useState('');

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
      loadingState();

    }

    return (
        <Fragment>
            <header>
                <h1>
                    Out of Context Movie Spoiler
                </h1>
                <p>
                    The world moves too fast and you can get lost in the chaos. We’ve created an app that summarizes movie plots in 3 gifts. Lorem ipsum blah blah blah. This isn’t permanent. What is copy text even????
                </p>
            </header>
            <main>
                <form 
                    action=""
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="movieInput">

                    </label>
                    <input 
                        type="text" 
                        id="movieInput" 
                        name="movieInput" 
                        value={userInput}
                        onChange={handleChange}
                    >
                    </input>
                    <button 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

                <div className="results-buttons">
                    {moviesArray.map(movie => {
                        return (
                            <button
                                key={movie.id}
                                id={movie.id}
                                onClick={() => {handleClick(movie)}}
                            >
                                {`${movie.title}(${movie.release_date})`}
                            </button>
                        )
                    })}
                </div>
            </main>
        </Fragment>
    )
}

export default SplashPage;