import React from 'react'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutImage from '../../assets/about/about_img.jpg';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    const faBusinessIcon =  <FontAwesomeIcon icon= {faBusinessTime} />
    const faChartPieIcon =  <FontAwesomeIcon icon= {faChartPie} />
    const faTruckFastIcon =  <FontAwesomeIcon icon= {faTruckFast} />
    const faUserClockIcon =  <FontAwesomeIcon icon= {faUserClock} />
    const faHouseLaptopIcon =  <FontAwesomeIcon icon= {faHouseLaptop} />
    const faPhonesIcon =  <FontAwesomeIcon icon= {faPhone} />
  return (
    <div>
      <section id='about'>
      <div className="container">
      <div className="title_headling">
      <h3>We Provides Shortage Remarkable Ideas!</h3>
      <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </div>
      <div className="about_box_wrapper">
      <div className="about_box">
      <div className="about_icon">
              {faBusinessIcon}
      </div>
      <div className="abou_content">
      <h5>Development</h5>
      <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
      </div>
      </div>

      <div className="about_box">
      <div className="about_icon green_icon">
              {faChartPieIcon}
      </div>
      <div className="abou_content">
      <h5>Integration</h5>
      <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
      </div>
      </div>

      <div className="about_box">
      <div className="about_icon blue_icon">
              {faTruckFastIcon}
      </div>
      <div className="abou_content">
      <h5>Branding</h5>
      <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan sit accusa.</p>
      </div>
      </div>

      </div>
        
            <div className="about_box_details">
            <div className="about_col">
            <div className="about_image">
            <img src={AboutImage} alt="about_image" />
            </div>
        <div className="img_info__box">
            <h6 className="img_info__title">GET A PRICE QUOTE TODAY! </h6>
            <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>
            <a href="/"> {faPhonesIcon} <span> 0301-1202747</span></a>
            </div>
       </div>
       <div className="about_col more_space">
            <h3>We have business skills that will increase your earnings</h3>
            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="grid_info">
            <div className="icon"> {faUserClockIcon} </div>
            <div className="detail">
            <h4>Start your own business in minutes</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            </div>
            </div>

            <div className="grid_info">
            <div className="icon green_icon"> {faHouseLaptopIcon} </div>
            <div className="detail">
            <h4>Open a business account online</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            </div>
            </div>

       </div>
            
            </div>

      </div>
      </section>
    </div>
  )
}

export default About
