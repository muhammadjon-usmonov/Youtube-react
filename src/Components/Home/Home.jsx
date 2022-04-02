import React from "react";
import './Home.scss';

import homeDollieImg from "..//..//Assets/Images/svg/Gussie.svg";
import leftImg from "..//..//Assets/Images/svg/Left.svg";
import rightImg from "..//..//Assets/Images/svg/Right.svg";
import homeFoodImg from "..//..//Assets/Images/svg/Food.svg";

function Home (){
    const [users, setUsers] = React.useState([]);
    const [recom, setRecom] = React.useState([]);
    const [mean, setMean] = React.useState([]);

   const homeRender = React.createRef();
    
    React.useEffect(() => {
		(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/photos');

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
           <div className="box" ref={homeRender}>
                <div className="box__hero">
                    <div className="box__hero__top">
                        <div className="box__hero__img">
                            <img className="box__hero-img" src={homeDollieImg} alt="" width={50} height={50} />
                            <h3 className="box__hero__title">
                                Dollie Blair
                            </h3>
                        </div>
                        <div>
                            <img className="box__left-img" src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-top home__list">
                       {   
                            users && users.map((user)=>(
                                <li className="home__item-top" key={user.id}>
                                    <img className="home__item-img" src={user.url} alt="Photos" width={250} height={150}/>
                                    <p>{user.title}</p>
                                </li>
                            ))
                          }
                    </ul>
                </div>

                <div className="box__middle">
                    <div className="box__hero__top">
                            <h3 className="box__hero__title">
                                Recommended
                            </h3>
                        <div>
                            <img className="box__left-img" src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-middle  home__list">
                       {   
                            recom && recom.map((recom)=>(
                                <li className="home__item-middle" key={recom.id}>
                                    <img className="home__item-img" src={recom.url} alt="Photos" width={340} height={200} />
                                    <p>{recom.title}</p>
                                </li>
                            ))
                          }
                    </ul>
                </div>

                <div className="box__bottom">
                    <div className="box__hero__top">
                        <div className="box__hero__inner">
                            <img className="box__hero-img"src={homeFoodImg} alt="" width={50} height={50} />
                            <h3 className="box__hero__title">
                            Food & Drink
                            </h3>
                            <span className="box__hero__span">
                                Recommended channel for you
                            </span>
                        </div>
                        <div>
                            <img className="box__left-img" src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-bottom  home__list">
                       {   
                            mean && mean.map((mean)=>(
                                <li className="home__item-bottom" key={mean.id}>
                                    <img className="home__item-img" src={mean.url} alt="Photos" width={250} height={150} />
                                    <p>{mean.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>              
           </div>
        </>
    )
}

export default Home;