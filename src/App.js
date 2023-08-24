import './App.css';
import Navbar from './navbar';
import Home from './body';
import Footer from './footer';
import Category from './category';
import  Variety from './Variety'

function App(){
  return(
    <div className='App'>
      <Navbar/>
      <Home/>
      <Category/>
      <Variety/>
     
      <Footer/>
      
     
      
    
    </div>
  )
}
export default App;