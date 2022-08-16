import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './components/Home';
import Store  from './components/Store';
import Ipad  from './components/Ipad';
import Iphone  from './components/Iphone';
import Macbook  from './components/Macbook';
import Accesories  from './components/Accesories';
import Bestmac from './components/bestsell/Bestmac';
import Bestiphone from './components/bestsell/Bestiphone';
import Bestipad from './components/bestsell/Bestipad';
import Bestaccesories from './components/bestsell/Bestaccesories';
import Main from './components/Main';
import Audio from './components/Store/Audio';
import Staccess from './components/Store/Staccess';
import Stcat from './components/Store/Stcat';
import Keyboard from './components/Store/Keyboard';
import Charger from './components/Store/Charger';
import Devices from './components/Store/Devices';
import Bag from './components/Store/Bag';
import Camera from './components/Store/Camera';
import Cart from './components/Cart';
import Login from './components/Login';


function App() {
  return (
    <>
    <BrowserRouter>
    <Main/>
      <Routes>

        <Route path="/home" element={ <Home/> } />
        <Route path='/store' element={ <Store/>}/>
        <Route path='/dropdown' element={ <dropdown/> }  />
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/iphone' element={<Iphone/>}/>
        <Route path='/macbook' element={<Macbook/>}/>
        <Route path='/accesories' element={<Accesories/>} />
        <Route path='/bestsell/bestmac' element={ <Bestmac/> } />
        <Route path='/bestsell/bestiphone' element={ <Bestiphone/> } />
        <Route path='/bestsell/bestipad' element={<Bestipad />} />
        <Route path='/bestsell/bestaccesories' element={ <Bestaccesories />} />
        <Route path='/store/audio' element={ <Audio/> } />
        <Route path='/store/access' element={ <Staccess/> } />
        <Route path='/store/cat' element={ <Stcat/> } />
        <Route path='/store/keyboard' element={ <Keyboard/> } />
        <Route path='/store/charger' element={ <Charger/> } />
        <Route path='/store/devices' element={ <Devices/> } />
        <Route path='/store/camera' element={ <Camera/> } />
        <Route path='/store/bag' element={ <Bag /> } />
        <Route path='cart' element={ <Cart/> } />
        <Route path='/login' element={ <Login/> } />

      </Routes>
    </BrowserRouter >
    
    </>

  );
}

export default App;
