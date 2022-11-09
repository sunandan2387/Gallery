import SignUp from "./components/signup/SignUp";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <SignUp />
      </Router>
    </div>
  );
}

export default App;
