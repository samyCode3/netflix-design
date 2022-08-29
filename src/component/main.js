import React from "react";
import Popularity from './popularity'
// import Images from "./files/imageFooter"
function Main() {
  return (
    <div>
      <main>
        <div className="flex-cat">
          <div className="wrap-flex">
            <div className="title">
              <p>Drama | Thriller | Supernatural</p>
              <h4>Stranger Things</h4>
              <h5>
                2019 | DIRECTOR: <span className="span1">Shawn Levy </span> |
                seasons: <span className="span1">3 (5 Episodes)</span>
              </h5>
              <div className="text-testing">
                <span>
                  {" "}
                  In 1980s Indiana, a group of young friends witness
                  supernatural forces and secret government exploits. As they
                  search for answers, the children unravel a series of
                  extraordinary mysteries.
                </span>
              </div>
              <div className="rating">
                <img src="./Images/Group 5.png" alt="Images"></img>
              </div>

              <div className="btn">
                <div className="img-1">
                  <a href="">STREAM NOW</a>

                  <img src="./Images/Vector2.png"></img>
                </div>
                <div className="episode">
                  <a href="">ALL EPISODES</a>
                </div>
              </div>
              <div className="popular">
                <div className="first-flex">
                  <p>POPULAR THIS WEEK</p>
                  <div className="second-flex">
                    <img src="./Images/Group 2.png"></img>
                    <img className="gr2" src="./Images/Group 1.png"></img>
                  </div>
                </div>
                < Popularity />
              </div>
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
