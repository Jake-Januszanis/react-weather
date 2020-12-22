
import "../../src/tailwind.output.css";
import Form from "./form"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CurrentForecast from "./current-forecast"
import Error from "./error"
import Footer from './footer'
import FetchForecast from './fetch-forecast';



function App() {
  return (
    <div>
    
    <Router>

        <Switch>

        <Route exact path="/">
          <Form />
        </Route>

        <Route exact path="/current-forecast">
            <CurrentForecast />
        </Route>
        
            <Route exact path="/error">
              <Error />
            </Route>
            
            <Route exact path="/fetch-forecast">
              <FetchForecast />
            </Route>

        </Switch>
    </Router>
    <Footer />
    </div>

  );
}

export default App;
 