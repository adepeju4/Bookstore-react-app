import TopBar  from './Components/Appbar';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 


function App() {
  return (
    <Router>
      
    <div className="App">
        <TopBar />
        <div className="content">
          <Switch>
            <Route path="/books">
            <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  )
}

export default App;
