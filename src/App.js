import "./App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import Login from "./Login";
import Singup from "./Singup";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact>
             
              <HomePage />
            </Route>

            <Route path="/chat-message" exact>
              <Header backButton="/" />
              <ChatMessage />
            </Route>

            <Route path="/chat-message/:people" exact>
              <Header />
              <ChatScreen />
            </Route>

            <Route path="/tcards" exact>
              <Header />
              <TinderCards />
              <SwipeButton />
            </Route>

            <Route path="/login" exact>
              <Header />
              <Login />
            </Route>

            <Route path="/singup" exact>
              <Header />
              <Singup />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
