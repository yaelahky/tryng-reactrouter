import React from "react";

class Main extends React.Component {
    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('dataAccount'))
        if (data){
            this.props.history.push('/home')
        } else {
            this.props.history.push('/login')
        }
    }

    render(){
        return null
    }
}

export default Main;