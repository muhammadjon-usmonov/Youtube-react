import React from "react";

import './Video.scss'
import videoHeroImg from '..//..//Assets/Images/png/videoImg.png';
import videoFood from '..//..//Assets/Images/svg/Food.svg';

function Video (){

    const [video, setVideo] = React.useState([])

    React.useEffect(()=>{
        ( async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");

            const data = await res.json();
            if(data){
                setVideo(data.slice(1,30))
            }

        })();
    },[])


    return(
        <>
            <div className="video">
                <div className="video__left">
                    <img src={videoHeroImg} alt="" width={820} height={400} />
                    <div className="video__hero">
                        <div className="video__hero__left">
                            <h3 className="video__hero__title">
                                Dude You Re Getting A Telescope
                            </h3>
                            <span className="video__hero__views">
                                123k views
                            </span>
                        </div>

                        <ul className="video__hero__list">
                            <li className="video__hero__item">
                                123k
                            </li>
                            <li className="video__hero__item">
                                435k
                            </li>
                            <li className="video__hero__item">
                                Share
                            </li>
                            <li className="video__hero__item">
                                ...
                            </li>
                        </ul>
                    </div>  

                    <div className="video__bottom">
                        <div className="video__bottom__left">
                            <img className="video__bottom__videoFood" src={videoFood} alt="" width={80} height={80} />
                            <div className="video__bottom-food">
                                <h3 className="video__bottom__title">
                                    Food & Drink
                                </h3>
                                <span className="video__bottom__span">
                                    Published on 14 Jun 2019
                                </span>
                                <p className="video__bottom__text">
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. 
                                </p>
                                <a className="video__bottom__link" href="#link">
                                Show more
                                </a>
                            </div>

                        </div>
                        <a className="video__bottom__subs-link" href="#link">
                            Subscribe 2.3m
                        </a>
                    </div>

                </div>

                <div className="video__right">
                       <div className="video__right__top">
                            <h3 className="video__right__title">
                                Next
                            </h3>
                            <p className="video__right__span">
                                AUTOPLAY
                            </p>
                       </div>
                    <ul className="video__list">
                         {
                            video && video.map((videos) => (
                                <li className="video__item" key={videos.id}>
                                    <img src={videos.url} alt="" width={250} height={200} />
                                </li>
                            ))
                        }
                    </ul>
                    </div>
            </div>
        </>
    )
}

export default Video;