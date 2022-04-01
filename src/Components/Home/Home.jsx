import React from "react";
import './Home.scss';

import leftImg from "..//..//Assets/Images/svg/Left.svg";
import rightImg from "..//..//Assets/Images/svg/Right.svg";

function Home (){
    const [users, setUsers] = React.useState([]);
    const [recom, setRecom] = React.useState([]);
    const [mean, setMean] = React.useState([]);

    React.useEffect(() => {
		(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/photos');

			const data = await res.json();
            console.log(data);
			if (data) {
				setUsers(data.slice(0, 50));
                setRecom(data.slice(50, 100));
                setMean(data.slice(100, 150));
			}
		})();
	}, []);

    return (
        <>
           <div className="box">
                <div className="box__hero">
                    <div className="box__dollie">
                        <div className="box__">
                            <img src="" alt="" />
                            <h3 className="dollie__name">
                                Dollie Blair
                            </h3>
                        </div>
                        <div>
                            <img src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-top">
                       {   
                            users && users.map((user)=>(
                                <li className="home__item-top" key={user.id}>
                                    <img className="home__item-img" src={user.url} alt="Photos" width={250} height={150} />
                                    <p>{user.title}</p>
                                </li>
                            ))
                          }
                    </ul>
                </div>

                <div className="box__middle">
                    <div className="box__recom">
                        <div className="box__">
                            <img src="" alt="" />
                            <h3 className="recom__name">
                                Recommended
                            </h3>
                        </div>
                        <div>
                            <img src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-middle">
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
                    <div className="box__mean">
                        <div className="box__">
                            <img src="" alt="" />
                            <h3 className="mean__name">
                                Dollie Blair
                            </h3>
                        </div>
                        <div>
                            <img src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>

                    <ul className="home__list-bottom">
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