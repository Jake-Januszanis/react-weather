
import "../../src/tailwind.output.css";
import Form from "./form"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CurrentForecast from "./current-forecast"
import Error from "./error"
import WeatherDisplay from "./weather-display";
import FetchForecast from './fetch-forecast';



function App() {
  return (
    <div>
    
    <h1 className="text-6xl text-blue-700 text-center italic mb-6">Express Weather</h1>
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
        <Link to ="/"><h1 className="text-4xl text-center bg-gray-200">Home</h1></Link>
        <span></span>
    </Router>
    </div>

  );
}

export default App;
 