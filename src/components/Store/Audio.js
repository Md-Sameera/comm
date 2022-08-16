import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles.css";

const Audio = () => {
    const [data , useData] = useState([])
  useEffect(()=>{
      const url = "http://localhost:40025/api/audio/";
      fetch(url).then(res => res.json())
      .then(useData)
      .catch(err=>console.log(err))
  } , [])
  return (
    <>
    <div className='stbar'>
        <h4>STORE / CATEGORIES </h4>
    </div>
    <div className='stg'>
        <div className='side'>
        <div className='bl'>
            <h4><p>CATEGORIES : </p></h4>
            <ol>
                <p><Link to="/store/audio"><li>AudioDevices</li></Link></p>
                <p><Link to="/store/bag"><li>Bags,Shirts</li></Link></p>
                <p><Link to="/store/camera"><li>Camera,vedio</li></Link></p>
                <p><Link to="#"><li>AppleCare</li></Link></p>
            </ol>
        </div>
        <div className="slidecontainer">
            <h4><p>PRICES:</p></h4> <br></br>
            <p>Range :    500-3000</p>
            <input type="range" min="1" max="100" value="50" />
        </div>
        <div className='bl'>
            <h4><p> COLORS : </p> </h4><br></br>
        <form action="#">
            <input type="radio" id="Yellow" name="colors"/>
            <label>Yellow</label><br></br>
            <input type="radio" id="Green" name="colors" />
            <label>Green </label><br></br>
            <input type="radio" id="Red" name="colors" />
            <label>Red</label><br></br>
            <input type="radio" id="Brown" name="colors"/>
            <label>Brown </label><br></br>
        </form>
        </div>
        <div className='bl'>
            <h4><p>BRANDS : </p></h4> <br></br>
            <p><Link to="#"> Apple </Link></p>
            <p><Link to={"#"}> LG </Link></p>
            <p><Link to={ "#"}> SamSung </Link></p>
        </div>
      </div>
        <div className='im'>
            <img src={"https://cdn.mos.cms.futurecdn.net/EdYRZi8pmTWRfNCoBZauNe-970-80.jpg.webp"} height={"50%"} width="90%" alt={""} />
       
        <div className='stac'>
        {
            data.map((res)=>{
                return (
                    <div className='abc'>
                        <div > <img  src={res.ImageAsset} key={res.id} alt=""  width="70%" height="70%" /> </div>
                        <div> 
                            <b> {res.Title} </b>    
                            <p> <b>Price:</b> {res.Price} </p>  
                            {/* <p><b>Description:</b> {res.BlogContent} </p> */}
                        </div>
                        <Link to={"../cart"}><button className='buy'>BUY NOW</button></Link>
                    </div>
                )
            })
        }
      </div>  
      </div>   
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

export default Audio