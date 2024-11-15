import './App.css';
import {LoginProvier} from "../Contexts/LoginContext";
import {HomePage} from "../Pages/Home/HomePage";
import {BrowserRouter as Router} from "react-router-dom";
import {EventProvider} from "../Contexts/EventContex";
import React from "react";
import {AppUI} from "./AppUI";
import {UpdateProvider} from "../Contexts/UpdateContex";


function App() {
  return (
      <Router>

          <EventProvider>
              <LoginProvier>
                  <UpdateProvider>
                      <AppUI/>
                  </UpdateProvider>
              </LoginProvier>
          </EventProvider>
      </Router>

  );
}

export default App;
