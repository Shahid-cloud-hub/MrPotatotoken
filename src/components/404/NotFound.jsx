import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotFrounContainer } from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/404");
  }, []);
  return (
    <NotFrounContainer>
      <div className="stars">
        <div className="central-body">
          <img
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            alt="test"
            width="300px"
          />
          <Link to="/" className="btn-go-home">
            GO BACK HOME
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            alt="test"
            width="40px"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              alt="test"
              width="100px"
            />
            <img
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              alt="test"
              width="80px"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              alt="test"
              width="140px"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </NotFrounContainer>
  );
};

export default NotFound;
