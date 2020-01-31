import React from "react";
import {requestLogin} from '../public/redux/actions/auth';
import {connect} from 'react-redux';
import axios from 'axios';
import qs from 'qs';

class Login extends React.Component {
    // letak fungsi
    componentDidMount() {
        console.log("Ini adalah component did mount")
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        let localUsername = event.target.value
        this.setState({
            username: localUsername
        })
    }

    handlePassword = (event) => {
        let localPassword = event.target.value
        this.setState({
            password: localPassword
        })
    }

    handleSubmitLogin = (event) => {
        event.preventDefault()
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        //untuk url encoded
        if (this.state.username === "" && this.state.password === ""){
            alert("Username dan Password tidak boleh kosong")
        } else {
            // const {name, token, email} = this.props.auth.data
            // this.props.dispatch(requestLogin(data, token))
            axios.post('http://127.0.0.1:3001/auth/login', qs.stringify(data))
            .then(response => {
                if (response.status == 200){
                    this.props.setDataLogin(response.data.data)
                    this.props.history.push('/home')
                } else {
                    console.log("err")
                }
            })
            .catch(error => {
                console.log(error)
            })

        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder="username"
                        onChange={(event) => this.handleUsername(event)}
                    />
                    <input
                        type='password'
                        placeholder="password"
                        onChange={(event) => this.handlePassword(event)}
                    />
                    <button onClick={(event) => this.handleSubmitLogin(event)} type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    setDataLogin: payload => dispatch({
        type: 'POST_LOGIN_FULFILLED',
        payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)