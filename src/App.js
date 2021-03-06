import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Contact from './componants/Contact/Contact';
import CourseDetail from './componants/CourseDetail/CourseDetail';
import Courses from './componants/Courses/Courses';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import NotFound from './componants/NotFound/NotFound';
import ScrollToTop from './componants/ScrollToTop/ScrollToTop';
import Services from './componants/Services/Services';

function App() {
  return (
    <BrowserRouter>

      {/* scroll restoration */}
      <ScrollToTop />

      {/* navbar */}
      <Header></Header>

      <Switch>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
        
        <Route path="/home"> 
          <Home></Home>
        </Route>
        
        <Route path="/course/:courseId"> 
          <CourseDetail></CourseDetail>
        </Route>

        <Route path="/courses"> 
          <Courses></Courses>
        </Route>

        <Route path="/services"> 
          <Services></Services>
        </Route>
        
        <Route path="/about"> 
          <About></About>
        </Route>
        
        <Route path="/contact"> 
          <Contact></Contact>
        </Route>
        
        <Route exact path="*"> 
          <NotFound></NotFound>
        </Route>

      </Switch>

      {/* footer  */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
