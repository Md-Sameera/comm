import React  from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Store = () => {
  return (
    <>
    <div><img src={"https://cdn.mos.cms.futurecdn.net/EdYRZi8pmTWRfNCoBZauNe-970-80.jpg.webp"} height={"450px"} width="95%" alt={""} /></div>
      
    <div className='drop'>
      <div>
      <Link to="/store/access"><h4>Accesories</h4></Link>
      <ol>
        <p>Audio - Devices</p>
        <p>Bags,Shirts</p>
        <p>Camera,vedio</p>
        <p>Apple Care</p>
        </ol>
      </div>
      <div>
      <Link to="/store/cat" ><h4>Categories</h4></Link>
        <ol>
          <p>Charging Devices</p>
          <p>Mics & Keyboards</p>
          <p>Display</p>
          <p>Fitness & Sports</p>
        </ol>
      </div>
    </div>
    </>
  )
}

export default Store