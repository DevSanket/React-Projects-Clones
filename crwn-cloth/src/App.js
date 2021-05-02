import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/Shop';

function App() {

  const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );

  const TopicPageDetails = (props) => (
    <div>
      <h1>Topic Page {props.match.params.topicId}</h1>
    </div>
  )

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/shop/hats' component={HatsPage}/>
        <Route path="/topic/:topicId" component={TopicPageDetails}/>
      </Switch>
    </div>
  );
}

export default App;
