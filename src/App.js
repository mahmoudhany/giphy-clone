import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import SingleGif from "./components/SingleGif";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Trending from './pages/Trending';
import './styles/style.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/' exact component={Trending} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/search/:q' exact component={Search} />
        <Route path='/gifs/:id' exact component={SingleGif} />
        <Route>
          <h4
            className='text-center'
            style={{ fontSize: 40, marginTop: 30 }}
          >404 Not Found!</h4>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
