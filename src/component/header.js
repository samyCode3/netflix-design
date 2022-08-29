import React from "react";

function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="flex">
          <div className="wrap">
            <div className="net-img">

            <img src="./Images/netflixlogo.png" alt="Images"></img>
            </div>
            <div className="text">
           
              <p>
                {" "}
                <span>|</span> Friday July 2022
              </p>
            </div>
          </div>
          <div className="wrap-img">
            <div className="vector">
            <img src="./Images/Vector.png" alt="Images"></img>
            </div>
            <div className="profile">
              <img src="./Images/Ellipse 2.png" alt="Images"></img>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
