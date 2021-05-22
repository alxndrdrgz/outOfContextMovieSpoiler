import { Fragment } from 'react';

const LoadingPage = () => {

    return (
        <Fragment>
            {
                //  loadingState ? 
                <div className="loading-screen">
                    <h1>Loading... Please Wait </h1>
                    <div>Loading animation here ☺️</div>
                </div>
                // : 
                // <div className="error-screen">
                // <h1>Sorry! Something's gone wrong!</h1>
                // </div>
            }
        </Fragment>
    )
}

export default LoadingPage