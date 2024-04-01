import React from 'react';
import './Styles/MainPage.css';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="imgLoader"></div>

        <div className="container">

          <h1 className="title">
            Turning pages<br />
          </h1>


          <div className="book">
            <div className="gap"></div>
            <div className="pages">
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
            </div>
            <div className="flips">
              <div className="flip flip1">
                <div className="flip flip2">
                  <div className="flip flip3">
                    <div className="flip flip4">
                      <div className="flip flip5">
                        <div className="flip flip6">
                          <div className="flip flip7"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
