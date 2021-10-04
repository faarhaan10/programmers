import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Courses from './componants/Courses/Courses';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import NotFound from './componants/NotFound/NotFound';
import Services from './componants/Services/Services';

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

        <Route path="/services"> 
        <Services></Services>
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
