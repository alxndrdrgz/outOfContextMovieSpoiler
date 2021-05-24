import { Fragment } from 'react';

const LoadingPage = () => {

    return (
        <Fragment>
            {
                //  loadingState ? 
                <div className="loading-screen">
                    <div className="wrapper">
                        <div className="animation-container">
                            <div className="animation-bar animation-bar0"></div>
                            <div className="animation-bar animation-bar1"></div>
                            <div className="animation-bar animation-bar2"></div>
                            <div className="animation-bar animation-bar3"></div>
                        </div>
                        <p>Loading...</p>
                    </div>
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