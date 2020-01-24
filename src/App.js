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

 export default class App extends React.Component {
    state = {
        isLogin: true
    }

    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('dataAccount'))
        if (!data){
            this.setState({isLogin: false})
        }
    }
     render(){
         return(
             <BrowserRouter>
                {this.state.isLogin && <Navbar {...this.props} />}
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