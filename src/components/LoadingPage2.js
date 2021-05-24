import { Fragment } from 'react';

const LoadingPage2 = () => {

    return (
        <Fragment>
            {
                //  loadingState ? 
                <div className="loading-screen">
                    <div className="wrapper">
                        <div className="light-strip-container">
                          <div className="light-strip-top">
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                          </div>
                          <div className="light-strip-sides">
                              <div className="light-strip-left">
                                <div className="light-bulb"></div>
                                <div className="light-bulb"></div>
                                <div className="light-bulb"></div>
                                <div className="light-bulb"></div>
                              </div>
                              <div className="light-strip-right">
                                  <div className="light-bulb"></div>
                                  <div className="light-bulb"></div>
                                  <div className="light-bulb"></div>
                                  <div className="light-bulb"></div>
                              </div>
                          </div>
                          <div className="light-strip-bottom">
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                              <div className="light-bulb"></div>
                          </div>
                          <p className="coming-soon">Coming soon...</p>
                        </div>
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

export default LoadingPage2