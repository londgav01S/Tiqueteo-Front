import './App.css';
import * as PropTypes from "prop-types";
import {DataNewPassword} from "../Components/NewPassword/DataNewPassword";
import {Login} from "../Pages/Login/Login";
import {RegisterUser} from "../Pages/RegisterUser/RegisterUser";
import {RecoverPassword} from "../Pages/RecoverPassword/RecoverPassword";

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
