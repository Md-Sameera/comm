import {React , useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Main = () => {

  const [data , useData] = useState([])
  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
    useEffect(()=>{
      const url = "https://backcomm.herokuapp.com/api/fpro/";
      fetch(url).then(res => res.json())
      .then(useData)
      .catch(err=>console.log(err))
  } , [])
  
  if (searchInput.length > 0) {
      data.filter((country) => {
      return country.CategoryName.match(searchInput);
  });
  }
  return (
    <>
      <div className='cont'>
          <div className='to'>
            <Link to={"/login"}><span class="material-symbols-outlined">
              person
            </span> My Profile <span>    </span></Link>
            <span class="material-symbols-outlined">
              shopping_cart
            </span> Items <span>   </span>
            <button  onChange={handleChange}>
            <span class="material-symbols-outlined">
              search
            </span>
            </button>
            <span action="/" method="get">
            <input type="text" placeholder="Search here" onChange={handleChange}  value={searchInput} />
            {data.map((country, index) => {
              return (
                <p>{data.CategoryName}</p>
              )  
            })}
            
            </span>
          </div>
          <div>  <h1 className='the'>I-SHOP</h1>   </div>
          <div className='bar'>
            <ol>
              <Link to="/home"><li>HOME</li></Link>
              <Link to="/store"><li>STORE </li> </Link>
              <Link to="/iphone"><li>IPHONE</li></Link>
              <Link to="/ipad"><li>IPAD</li></Link>
              <Link to="/macbook"><li>MACBOOK</li></Link>
              <Link to="/accesories"><li>ACCESORIES</li></Link>
            </ol>
          </div>
      </div> 
    </>
  )
}
export default Main
