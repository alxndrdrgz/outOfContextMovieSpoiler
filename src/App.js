import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SplashPage from './components/SplashPage.js';
import LoadingPage from './components/LoadingPage.js';
import Results from './components/Results.js';

//Declaring name space structure for app.
const oocms = {};

//Variable declaring the Giphy API key
oocms.giphyKey = `J0Mq3DGHVu2HtcdoS7QMvJX0qMJ359VA`;
// Variable to store Giphy endpoint
oocms.giphyURL = 'https://api.giphy.com/v1/gifs/search';
//Variable declaring Movie DB key
oocms.mDbKey = `5b4cfcb5bfcdfe63f43999ac1acbfb53`;
// Variable to store Movie DB endpoint
oocms.mDbTitleURL = 'https://api.themoviedb.org/3/search/movie/';
// oocms.movieDbKeywordURL = 'https://api.themoviedb.org/3/movie/{movieID}/keywords';



function App() {
  // PSEUDOCODE
  // Text input with search button
  // get input value (we're looking for a movie title)
  // make a query to moviedb based on our movie title
  // save the titles,ids and overviews of the top 3 movies returned in state
  // populate a list of buttons with the movie titles of the top 3 results of the api call
  // User selects their movie and clicks appropriate button
  // Display a loading state because this part will take ages
  // make an axios/fetch call to moviedb based on the chosen movie's ID to get a random set of 3 keywords(MAYBE DO THIS BEFORE THEY SELECT THE MOVE?? AND DO IT FOR ALL 3 MOVIE OPTIONS -- STRETCH)
  // Using the keywords returned by the 2nd movieDB call, make a search query to giphy for each keyword
  // save the 3 gif urls to individual states
  // Render the gifs on the page using the urls and the movie overview saved in state
  // include a start-over button that clears the results component and returns the app to its original state. 

  //STRETCH GOALS: shareable results using routing? :O

  // 1 - Loading Page
  //* conditionally rendered error message


  // useStates located here:
  // State that store the initial movie results
  const [moviesArray, setMoviesArray] = useState([]);
  // State that stores the chosen movies overview
  const [moviesOverview, setMoviesOverview] = useState('')
  // State that stores the keywords from the movie keyword api endpoint
  const [movieKeywords, setMovieKeywords] = useState([])
  // State that saves the gifs in an array
  const [gifsArray, setGifsArray] = useState([])

  // Function that sets movie overview in state
  const getOverview = (overview) => {
    setMoviesOverview(overview)
    console.log(moviesOverview)
  }

  // Function to take user input and make call to Movie DB API
  const getMovies = input => {
    axios({
      url: oocms.mDbTitleURL,
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: oocms.mDbKey,
        query: input
      }
    })
      .then(response => {
        const resultsArray = response.data.results.slice(0, 3);
        // Mapping through the results of the api call and saving a simplified version of the data and saving it the the moviesArray
        const filteredArray = resultsArray.map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date
          };
        });
        setMoviesArray(filteredArray);
      })
  }
  
  
  
  console.log(moviesArray);
  
  // Function to get keywords from selected movie
  const getKeywords = id => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: oocms.mDbKey
      }
    })
    .then(response => {
      // Saving keywords to the moviesKeywords state
      const keywords = response.data.keywords.slice(0, 3);
      setMovieKeywords(keywords)
    });
  }
  
  useEffect(() => {

    // Creating an array so we can push the results from the gifs url into it
    const gifInfo = [];

    // Calling the giphy api using the keywords saved in the movieKeywords state when the movieKeyword state changes using the dependency array
    movieKeywords.forEach(keyword => {
      axios({
        method: "GET",
        url: oocms.giphyURL,
        dataResponse: 'json',
        params: {
          api_key: oocms.giphyKey,
          q: keyword.name
        }
      }).then(response => {
        gifInfo.push(
          {
            url:response.data.data[0].images.original.url,
            alt:response.data.data[0].title
          }
        )
      })
    });
    setGifsArray(gifInfo)
  }, [movieKeywords])

  return (
    <div>
      <SplashPage
        onSubmit={getMovies}
        moviesArray={moviesArray}
        getKeywords={getKeywords}
        getOverview={getOverview}
      />
      <LoadingPage />
      <Results />
    </div>
  );
}

export default App;
