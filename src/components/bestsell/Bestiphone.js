import React, { useEffect, useState } from 'react';
import "../Styles.css";
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "https://cdn.mos.cms.futurecdn.net/Mwt64pGtzxTzxdhv5ySLFK-970-80.jpg.webp" },
  { url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-4.jpg" },
  { url: "https://www.apple.com/v/ipad-pro/ai/images/overview/experience/intro_summary_static__epib5tclp926_large.png" },
  { url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-1.jpg" },
  { url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086025000" },
  { url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-2.jpg" },
  { url: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4907-10-Upcoming-Apple-products-built-and-conceptual-Image-8.jpg" },
];

const Bestiphone = () => {
    const [data , useData] = useState([])
  useEffect(()=>{
      const url = "http://localhost:40025/api/iphone/";
      fetch(url).then(res => res.json())
      .then(useData)
      .catch(err=>console.log(err))
  } , [])
  return (
    <>
    <div className='.cont'>
      <div><img src={"https://cdn.mos.cms.futurecdn.net/EdYRZi8pmTWRfNCoBZauNe-970-80.jpg.webp"} height={"450px"} width="90%" alt={""} /></div>
      <div className='bs'> BEST SELLER </div>
      
      <div className='bestbar'>
          <ol>
              <Link to="/home"><li>ALL</li></Link>
              <Link to="/bestsell/bestmac"><li>MACBOOK</li></Link>
              <Link to="/bestsell/bestiphone"><li>IPHONE</li></Link>
              <Link to="/bestsell/bestipad"><li>IPAD</li></Link>
              <Link to="/bestsell/bestaccesories"><li>ACCESORIES</li></Link>
          </ol>
      </div>
    <div className='all'>
        {
            data.map((res)=>{
                return (
                    <div className='card'>
                        <div > <img src={res.ImageAsset} alt="" width="70%" /> </div>
                        <div className='cdata'> 
                            <b> {res.Title} </b> 
                            <p> {res.Price} </p>
                        </div>
                        <Link to={"../cart"}><button className='buy'>BUY NOW</button></Link>
                    </div>
                )
            })
        }
      </div>
      </div>
      <div><img src={"http://3.bp.blogspot.com/-cD8Yhg1Nbtk/VA9lVy-fJeI/AAAAAAAABKw/cc6VWf7Lq_Y/s1600/Screen%2BShot%2B2014-09-09%2Bat%2B11.40.23%2BPM.png"} height="300px" width="97%" alt={""} /></div>
      <div className='container'>
        <div className='items'>
          <div><span class="material-symbols-outlined"> local_shipping</span></div>
          <b> FREE SHIPPING</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='items'>
          <div><span class="material-symbols-outlined">settings_backup_restore</span></div>
          <b>100% REFUND</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='items'>
          <div><span class="material-symbols-outlined">support_agent</span></div>
          <b>SUPPORT 24/7</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <br></br><br></br>
      </div>
      
      <div className='bs'> FEATURED PRODUCTS </div>
      <div className='fep'>
      <SimpleImageSlider
        width={600}
        height={320}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>

      
      <div className='contain'>
        <div className='ite'>
          <b>I-SHOP</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='ite'>
          <b>FOLLOW - US</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='ite'>
          <b>CONTACT US</b>
          <p>Education customers   Support: 1-800-800-2775    Sales: 1-800-780-5009</p>
          <p> Apple Business Manager   1-866-902-7144 </p>
        </div>
      </div>
      <div className='contain'>
        <div className='ite'>
          <b>Information</b>
          <br></br>

            <a href='https://discussions.apple.com/welcome'>About Us</a>
            <a href='https://support.apple.com/en_US/manuals'> Information</a><br></br>
            <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy-Policy</a>
            <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>
  
        </div>
        <div className='ite'>
          <b>Service</b>
          <br></br>
          <a href='https://discussions.apple.com/welcome'>About Us</a>
          <a href='https://support.apple.com/en_US/manuals'> Information</a><br></br>
          <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy Policy</a>
          <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>

        </div>
        <div className='ite'>
          <b>My Account</b>
          <br></br>
          <a href='https://discussions.apple.com/welcome'>About Us</a>
          <a href='https://support.apple.com/en_US/manuals'> Information</a><br></br>
          <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy Policy</a>
          <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>

        </div>
        <div className='ite'>
          <b>Extras</b><br></br>
          <a href='https://discussions.apple.com/welcome'>About Us</a>
          <a href='https://support.apple.com/'> Support</a><br></br>
          <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy Policy</a>
          <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>
        </div>
        <div className='ite'>
          <b>Usefull Links</b><br></br>        
          <a href='https://discussions.apple.com/welcome'>About Us</a>
          <a href='https://support.apple.com/en_US/manuals'> Information</a><br></br>
          <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy Policy</a>
          <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>
  
        </div>
        <div className='ite'>
          <b>Offers</b><br></br>          
          <a href='https://discussions.apple.com/welcome'>About Us</a>
          <a href='https://support.apple.com/en_US/manuals'> Information</a><br></br>
          <a href='https://www.apple.com/legal/privacy/en-ww/'>Privacy Policy</a>
          <a href='https://discussions.apple.com/terms'> Terms & Conditions</a>
        </div>
        </div>
    
    </>
  )
}

export default Bestiphone