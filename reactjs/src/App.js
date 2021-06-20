import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Login from './Login'
import Home from './User/Home'
import AddCar from './Admin/AddCar'
import ViewCar from './User/ViewCar'

function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/adminHome" component={AddCar} />
    <Route path="/userHome" component={Home} />
    <Route path="/ViewCar" component={ViewCar} />
    <Route path="/" exact={true} component={Login} />
    </div>
    </Router>
  );
}

export default App;
