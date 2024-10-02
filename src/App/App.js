import './App.css';
import * as PropTypes from "prop-types";
import {RecoverPassword} from "../Pages/RecoverPassword/RecoverPassword";
import {EnterCode} from "../Components/Code/EnterCode";
import {DataNewPassword} from "../Components/NewPassword/DataNewPassword";

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
          <DataNewPassword/>
      </>

  );
}

export default App;
