import React from 'react';
import mainImage from './Images/IMG_0916.JPG';
import icon1 from './Images/icons8-facebook-50.png';
import icon2 from './Images/icons8-github-50.png';
import icon3 from './Images/icons8-google-50.png';
import icon4 from './Images/icons8-instagram-50.png';
import icon5 from './Images/icons8-linkedin-circled-50.png';
import icon6 from './Images/icons8-vk-com-50.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
         <div className="wrapper">
        <div className="_container">
            {/* <!-- START HEADER --> */}
            <header>
                <div className="header__left">
                    <div className="header__left_img"><img src={mainImage} alt=""/></div>
                    <div className="header__left_button"><Link to='/addcomment'><button>ADD COMMENT</button></Link></div>
                </div>
                <div className="header__right">
                    <div className="header__right_inside">
                    <div className="hr">
                    <h2><span className="span3"></span><span className="span2"></span><span className="span1">Hello & Welcome</span>I'M <b>EMIR SOLTONBEKOV</b></h2>
                    <h5>Software Engineer & Coffee Addict</h5>
                    
                    </div>
                    
                    </div>
                    <div className="header__right_icons">
                        <a href="#"><img src={icon1} alt=""/></a>
                        <a href="#"><img src={icon2} alt=""/></a>
                        <a href="#"><img src={icon3} alt=""/></a>
                        <a href="#"><img src={icon4} alt=""/></a>
                        <a href="#"><img src={icon5} alt=""/></a>
                        <a href="#"><img src={icon6} alt=""/></a>
                    </div>
                </div>
            </header>
           
        </div>
     </div>
    
    </div>
  )
}

export default Home