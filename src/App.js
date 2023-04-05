import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import NavBar from './component/Nav'
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path='/' element={<h1>Site</h1>}/>
    <Route path='/home' element={<h1>Home</h1>}/>
    <Route path='/features' element={<h1>Feature</h1>}/>
    <Route path='/pricing' element={<h1>Pricing</h1>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
