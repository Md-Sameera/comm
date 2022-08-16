import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Macbook = () => {
  const [data , useData] = useState([])
  useEffect(()=>{
      const url = "http://localhost:40025/api/mac/";
      fetch(url).then(res => res.json())
      .then(useData)
      .catch(err=>console.log(err))
  } , [])
  return (
    <>
    <div className='ab'>
    {
        data.map((res)=>{
            return (
                <div className='abc'>
                    <div > <img src={res.ImageAsset} alt=""  width="90%" height="100%" /> </div>
                    <div> 
                        <b> {res.Title} </b>    
                        <p> <b>Price:</b> {res.Price} </p>  
                        <p><b>Description:</b> {res.BlogContent} </p>
                    </div>
                    <Link to={"/cart"}><button className='buy'>BUY NOW</button></Link>
                </div>
            )
        })
    }
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

export default Macbook