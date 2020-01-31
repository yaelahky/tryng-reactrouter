import React from "react";
import { 
    BrowserRouter,
    Switch,
    Route
 } from "react-router-dom";
 import Login from "./pages/Login"
 import Home from './pages/Home'
 import Navbar from './components/NavBar';
 import Main from './pages/Main';
 import Order from './pages/Order'

 import {connect} from 'react-redux'

class App extends React.Component {
     render(){
         return(
             <BrowserRouter>
                {this.props.auth.data.token && <Navbar {...this.props} />}
                <Switch>
                    <Route path="/" exact render={(props) => (<Main {...props} />)} />
                    <Route path="/login" render={(props) => ( <Login {...props} /> )} />
                    <Route path="/home" render={(props) => ( <Home {...props} /> )} />
                    <Route path="/order" render={(props) => ( <Order {...props} /> )} />
                </Switch>
             </BrowserRouter>
         )
     }
 }

 const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)