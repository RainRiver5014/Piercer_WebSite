import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "./App.css";

function App() {
   return (
      <div className="App">
         {/* <Router>
            <Routes>
               <Route path="/dashboard" exact component={Dashboard} />
            </Routes>
         </Router> */}
         <Dashboard />
      </div>
   );
}

export default App;
