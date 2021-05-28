import { Fragment } from 'react';

const LoadingPage = () => {

  return (
    <Fragment>
      {
        <div className="loading-screen">
          <div className="wrapper">
            <div className="animation-container">
              <div className="animation-bar animation-bar0"></div>
              <div className="animation-bar animation-bar1"></div>
              <div className="animation-bar animation-bar2"></div>
              <div className="animation-bar animation-bar3"></div>
            </div>
            <p>Coming soon...</p>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default LoadingPage