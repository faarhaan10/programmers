import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import About from './About/About';
import './App.css';
import Courses from './Courses/Courses';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        
        <Route path="/home"> 
        <Home></Home>
        </Route>
        
        <Route path="/about"> 
        <About></About>
        </Route>
        
        <Route path="/courses"> 
        <Courses></Courses>
        </Route>
        
        <Route exact path="*"> 
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
