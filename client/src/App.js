import SignUp from "./components/signup/SignUp";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom"
import Main from './components/main/Main'
import LogIn from './components/login/LogIn'

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Router>
        <Routes>
          {user && <Route path="/" exact element={<Main />} />}
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/" exact element={<Navigate replace to="/login"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
