import React from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Home from './component/Home'
import App from "./App"

const AppRouter = ()=>(
    <Router>
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/counter" component={App}></Route>
      </div>
    </Router>
)

export default AppRouter;