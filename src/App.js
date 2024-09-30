

import './App.css';
import * as PropTypes from "prop-types";
import {BaseLog} from "./Components/Log/BaseLog";
import {Login} from "./Components/Log/LoginView/Login";
import {RegisterUser} from "./Components/Log/RegisterUserView/RegisterUser";

function Router(props) {
    return null;
}

Router.propTypes = {children: PropTypes.node};

function ContextProvider(props) {
    return null;
}

ContextProvider.propTypes = {children: PropTypes.node};

function App() {
  return (
      <>
          <Login/>
      </>

  );
}

export default App;
