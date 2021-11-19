import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import WishList from './components/WishList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Main">
          <Switch>
            <Route exact path="/movie-list">
              <Home page={1}/>
            </Route>
            <Route exact path="/movie-list/wish-list">
              <WishList />
            </Route>
            {['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
              .map((x) =>
              <Route exact path={"/movie-list/home/page="+x}>
                <Home page={x}/>
              </Route>
            )}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
