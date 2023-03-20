
import './App.css';
import Header from './components/Header';
import{ Container} from 'react-bootstrap'
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Header/>
      <main className='py-3'>
         <Container>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/restaurants/:id' element={<RestaurantDetails />} />
           </Routes>
         </Container>
      </main>
    </Router>
    </>
  );
}

export default App;
