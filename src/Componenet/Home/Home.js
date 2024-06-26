import React from 'react'
import BannerImage from '../../assets/banner/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons'
 import './Home.css'
const Home = () => {

    
    const faChartIcon =  <FontAwesomeIcon icon= {faChartLine} />
    const faShieldIcon =  <FontAwesomeIcon icon= {faShieldHalved} />
    const faChartAreaIcon =  <FontAwesomeIcon icon= {faChartArea} />
  return (
    <div>
      <section id='home'>
      <div className="banner_image"></div>
      <div className="container">
      <div className="banner_outer">
       <div className="col">
       <h3 className='title'>
       WE PROMOTE YOUR <span>BUSINESS</span>
       </h3>
       <p>Nemo enim ipsam oluptatem quia reoluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione.</p>
       <div className="btn_wrapper">
       <a href="https://github.com/dashboard" className="btn"> Get Started</a>
       </div>
       </div>

<div className="col">
<div className="sub_banner_image">
<img src={BannerImage} alt="Banner_image" />
</div>
<div className="banner_style_1">
    {faChartIcon}
    <h4>Business Analysis</h4>
</div>
<div className="banner_style_1 banner_style_2">
    {faShieldIcon}
    <h4>99.9% Succcess</h4>
</div>
<div className="banner_style_1 banner_style_3">
    {faChartAreaIcon}
    <h4>Startegy</h4>
</div>

</div>

      </div>
      </div>
      
      </section>
    </div>
  )
}

export default Home
