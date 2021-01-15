import logo from './logo.png';
import { Button } from 'reactstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateSurvey from './components/CreateSurvey';
import TakeSurvey from './components/TakeSurvey';
import {useDispatch} from 'react-redux';
import {surveySlice} from './store/surveySlice';

function App() {
  const dispatch =  useDispatch();
  const redirectToNewSurvey = ()=>{
    //console.log("action",SurveySlice.action.CreateSurvey(playload can pass for e.g {counter: 10}));
    dispatch(surveySlice.action.createSurvey());
  }

  return ( 
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/create/:surveyId">
            <CreateSurvey/>
          </Route>
          <Route path="/take">
            <TakeSurvey/>
          </Route>
          <Route path="/">
              <Link to="/create/123">
              <Button className="survey-main-btn" onClick={redirectToNewSurvey}>Create Survey</Button>
              </Link>
              <Link to="/take">
              <Button className="survey-main-btn">Take Survey</Button>
              </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
