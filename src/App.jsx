import React from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { Route1 } from './views/Route1';
import { Route2 } from './views/Route2';
import { Baseview } from './components/Skeleton/Baseview';
import { Home } from "./views/Home";
import { ProjectDemo } from "./views/ProjectDemo";
const App = () => {

  return (
    <Router>
		<Baseview>
      <Routes>
        {/* <Route path="/test2" element={<Route1/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/test" element={<ProjectDemo/>}/>
        <Route path="/test2" element={<Route1/>}/>
      </Routes>
		</Baseview>
    </Router>
  );
}

export default App;
