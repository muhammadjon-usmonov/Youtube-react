import React from "react";
import "./Home.scss";

import homeDollieImg from "..//..//Assets/Images/svg/Gussie.svg";
import leftImg from "..//..//Assets/Images/svg/Left.svg";
import rightImg from "..//..//Assets/Images/svg/Right.svg";
import homeFoodImg from "..//..//Assets/Images/svg/Food.svg";
import { NavLink } from "react-router-dom";

function Home({ videoFunc }) {
  const [users, setUsers] = React.useState([]);
  const [recom, setRecom] = React.useState([]);
  const [mean, setMean] = React.useState([]);

  const homeRender = React.createRef();

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();
      if (data) {
        setUsers(data.slice(0, 50));
        setRecom(data.slice(50, 100));
        setMean(data.slice(100, 150));
      }
    })();
  }, []);

  return (
    <>
      <div className="home" ref={homeRender}>
        <div className="home__hero">
          <div className="home__hero__top">
            <div className="home__hero__img">
              <img
                className="home__hero-img"
                src={homeDollieImg}
                alt=""
                width={50}
                height={50}
              />
              <NavLink to={"/channel"}>
                <h3 className="home__hero__title">Dollie Blair</h3>
              </NavLink>
            </div>
            <div>
              <img className="home__left-img" src={leftImg} alt="" />
              <img src={rightImg} alt="" />
            </div>
          </div>

          <ul className="home__list-top home__list">
            {users &&
              users.map((user) => (
                <li className="home__item-top" key={user.id}>
                  <NavLink to={"/video"}>
                    <img
                      className="home__item-img"
                      src={user.url}
                      alt="Photos"
                      width={250}
                      height={150}
                      onClick={() => {
                        videoFunc(user.url, user.title);
                      }}
                    />
                    <h3 className="home__item__text">{user.title}</h3>
                    <p className="home__item__follow">
                      <span>80k views · 3 days ago</span>
                      <span>Dollie Blair</span>
                    </p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>

        <div className="home__middle">
          <div className="home__hero__top">
            <h3 className="home__hero__title">Recommended</h3>
            <div>
              <img className="home__left-img" src={leftImg} alt="" />
              <img src={rightImg} alt="" />
            </div>
          </div>

          <ul className="home__list-middle  home__list">
            {recom &&
              recom.map((recom) => (
                <li className="home__item-middle" key={recom.id}>
                  <NavLink to={"/video"}>
                    <img
                      className="home__item-img"
                      src={recom.url}
                      alt="Photos"
                      width={340}
                      height={200}
                      onClick={() => {
                        videoFunc(recom.url);
                      }}
                    />

                    <h3 className="home__item__text">{recom.title}</h3>
                    <p className="home__item__follow">
                      <span>80k views · 3 days ago</span>
                      <span>Dollie Blair</span>
                    </p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>

        <div className="home__bottom">
          <div className="home__hero__top">
            <div className="home__hero__inner">
              <img
                className="home__hero-img"
                src={homeFoodImg}
                alt=""
                width={50}
                height={50}
              />
              <NavLink to={"/channel"}>
                <h3 className="home__hero__title">Food & Drink</h3>
              </NavLink>
              <span className="home__hero__span">
                Recommended channel for you
              </span>
            </div>
            <div className="home__hero__link">
              <button className="channel__hero-btn">Subscribe 2.3m</button>
              <div>
                <img className="home__left-img" src={leftImg} alt="" />
                <img src={rightImg} alt="" />
              </div>
            </div>
          </div>

          <ul className="home__list-bottom  home__list">
            {mean &&
              mean.map((mean) => (
                <li
                  className="home__item-bottom"
                  key={mean.id}
                  onClick={() => {
                    videoFunc(mean.url);
                  }}
                >
                  <NavLink to={"/video"}>
                    <img
                      className="home__item-img"
                      src={mean.url}
                      alt="Photos"
                      width={250}
                      height={150}
                    />
                    <h3 className="home__item__text">{mean.title}</h3>
                    <p className="home__item__follow">
                      <span>80k views · 3 days ago</span>
                      <span>Dollie Blair</span>
                    </p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
