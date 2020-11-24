
import "../App.css";
import Form from "./form"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CurrentForecast from "./update-forecast"
import Error from "./error"
import WeatherDisplay from "./weather-display";

function App() {
  return (
    <Router>
    <h1>Express Weather</h1>
    <Link to ="/">Homepage</Link>
        <Switch>

        <Route exact path="/current-forecast">
            <CurrentForecast />
        </Route>
        
            <Route exact path="/">
                <Form />
            </Route>

            <Route exact path="/error">
              <Error />
            </Route>

            <Route exact path="/weather-display">
              <WeatherDisplay />
            </Route>

        </Switch>
    </Router>

  );
}

export default App;
 