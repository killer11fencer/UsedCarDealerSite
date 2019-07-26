import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = () => {
        let {email,password} = this.state
        axios.post('/api/user',{email,password})
    }
    render () {
        return(
            <div>
                <input name='email' onChange={this.handChange}/>
                <input name='password' onChange={this.handChange}/>
                <button onClick={this.handleSubmit}>Login</button>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}
export default Login