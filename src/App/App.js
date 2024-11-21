import './App.css';
import {LoginProvier} from "../Contexts/LoginContext";
import {HomePage} from "../Pages/Home/HomePage";
import {BrowserRouter as Router} from "react-router-dom";
import {EventProvider} from "../Contexts/EventContex";
import React from "react";
import {AppUI} from "./AppUI";
import {UpdateProvider} from "../Contexts/UpdateContex";
import {ModalProvider} from "../Contexts/ModalContext";
import {CouponProvider} from "../Contexts/CouponContext";
import {GoogleOAuthProvider} from "@react-oauth/google";


function App() {
  return (
      <GoogleOAuthProvider clientId="633937686926-kop9phc0tug4usplr1inlidd45tdrjng.apps.googleusercontent.com">
          <Router>
              <EventProvider>
                  <LoginProvier>
                      <UpdateProvider>
                          <ModalProvider>
                              <CouponProvider>
                                  <AppUI/>
                              </CouponProvider>
                          </ModalProvider>
                      </UpdateProvider>
                  </LoginProvier>
              </EventProvider>
          </Router>
      </GoogleOAuthProvider>

  );
}

export default App;
