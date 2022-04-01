import React from "react";
import "./Channel.scss";

import { NavLink } from "react-router-dom";

import channelUserLogo from "..//..//Assets/Images/svg/Nora.svg"
import leftImg from "..//..//Assets/Images/svg/Left.svg";
import rightImg from "..//..//Assets/Images/svg/Right.svg";

import ChannelSubs from "..//..//Assets/Images/svg/kolokolnik.svg";
import coverImg from "..//..//Assets/Images/png/Cover.png";
import channelSearch from "..//..//Assets/Images/svg/searchicon.svg"; 
import channelBox from "..//..//Assets/Images/png/channelBox.png";
import floraImg from "..//..//Assets/Images/png/flora.png";
import violetImg from "..//..//Assets/Images/png/violet.png";
import phillipImg from "..//..//Assets/Images/png/phillip.png";

function Cannel (){
    const [channelImg, setChannelImg] = React.useState([]);

    React.useEffect(()=>{
        (async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')  

            const data = await res.json();

            if(data){
                setChannelImg(data.slice(200,250));
            }
        })();
    }, []);

    return(
        <>

            <img className="channel__hero-img" src={coverImg} alt="" width={1110} height={250} />
            <div className="channel__hero">
                <div className="channel__hero__left">
                    <div className="channel__hero__user">
                        <img className="channel__hero-user" src={channelUserLogo} alt="" width={80} height={80} />
                       <div className="channel__hero__box">
                            <h3 className="channel__hero__title">
                                Margaret Phelps
                            </h3>
                            <span className="channel__hero__follow"> 
                                245K subscribed
                            </span>
                       </div>
                   </div>
                </div>

                <div className="channel__hero__right">
                    <img src={ChannelSubs} alt="" />
                    <button className="channel__hero-btn">
                        Subscribe 2.3m
                    </button>
                </div>
            </div>

           <div className="channel__big">
           <div className="channel__left">
               <ul className="channal__list">
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/cannel"} >
                            Home
                        </NavLink>  
                    </li>
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/video"} >
                            Videos
                        </NavLink>  
                    </li>
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/playlist"} >
                            Playlists
                        </NavLink>  
                    </li>
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/chennels"} >
                            Channels
                        </NavLink>  
                    </li>
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/discussion"} >
                            Discussion
                        </NavLink>  
                    </li>
                    <li className="channel__item">
                        <NavLink className="channel__link" to={"/about"} >
                            About
                        </NavLink>  
                    </li>

                    <li className="channel__link">
                        <img src={channelSearch} alt="" width={18} height={18}/>
                    </li>
                </ul>

            <div className="channel__center">
                <div className="channel__box">
                    <img className="channel__box-img" src={channelBox} alt="" width={480} height={250}/>
                    <div className="channel__box__sentence">
                        <h3 className="channel__box__title">
                            Choosing The Best Audio Player Software For Your Computer
                        </h3>
                        <p className="channel__text">
                        Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                        </p>
                        <p className="channel__box__views">
                        11k views  ·  6 months ago
                        </p>
                    </div>
                </div>
               </div>

               </div>   
                <div className="channel__right">
                        <p className="channel__right__title">
                        Recommended channel
                        </p>
                        <ul className="channel__right__list">
                            <li className="channel__right__item">
                                <img src={floraImg} alt="" width={50} height={50} />
                                <p> Flora Benson</p>
                            </li>
                            <li className="channel__right__item">
                                <img src={violetImg} alt="" width={50} height={50} />
                                <p> Violet Cobb</p>
                            </li> 
                            <li className="channel__right__item">
                                <img src={phillipImg} alt="" width={50} height={50} />
                                <p>Phillip Mullins</p>
                            </li>
                        </ul>
                    </div>
           </div>


                    <div className="channel__bottom">
                        <h3 className="channel__bottom__title">
                            Margaret Phelps videos
                        </h3>
                        <div>
                            <img src={leftImg} alt="" />
                            <img src={rightImg} alt="" />
                        </div>
                    </div>
                <ul className="channel__list">
                    {
                        channelImg && channelImg.map((channelImg)=>(
                        <li className="channel__item" key={channelImg.id} >
                            <img className="channel__img" src={channelImg.url} alt="Photos" width={200} height={150} />
                            
                        </li>
                        ))
                    }
                </ul>
        </>
    )
}

export default Cannel;