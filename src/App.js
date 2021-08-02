import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
