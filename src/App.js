import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import NavBar from './component/Nav'
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/SignUp';

function App() {
  return (
   <>
   <NavBar/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<h1>Home Products</h1>}/>
    <Route path='/AddProducts' element={<h1>AddProducts</h1>}/>
    <Route path='/UpdateProducts' element={<h1>UpdateProducts</h1>}/>
    <Route path='/Logout' element={<h1>Logout</h1>}/>
    <Route path='/Profile' element={<h1>Profile</h1>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  );
}

export default App;
