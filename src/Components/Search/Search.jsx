import React from "react";

import './Search.scss';
import searchVideo from '..//..//Assets/Images/svg/camera.svg';
import searchMore from '..//..//Assets/Images/svg/prilojeniya.svg';
import searchNotifition from '..//..//Assets/Images/svg/kolokolnik.svg';
import searchUser from '..//..//Assets/Images/svg/Userpic.svg';

function Search(){
    return(
        <>
           <div className="search">
            <input className="searchInput" type="text" placeholder="Search" />
                <div className="search__img">
                    <img className="search__video" src={searchVideo} alt="" width={27} height={20} />
                    <img className="search__more" src={searchMore} alt="" width={21} height={21} />
                    <img className="search__notifition" src={searchNotifition} alt="" width={22} height={26} />
                    <img className="search__logo" src={searchUser} alt="" width={40} height={40} />
                </div>
           </div>
            
        </>
    )
}

export default Search;