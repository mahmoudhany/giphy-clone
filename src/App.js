import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Search from "./page/Search";
import Trending from './page/Trending';
import './styles/style.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/' exact component={Trending} />
        <Route path='/search/:q' exact component={Search} />
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
