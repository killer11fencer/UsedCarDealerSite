import React, {Components} from 'react'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password:'',
            error_password: false,
            error_message: 'Password does not match, please try again'
        }
    }
handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
}
handleCancel = () => {
    this.setState({first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password:'',})
}
handleSubmit = () => {
    
    if(this.state.password === this.state.confirm_password && this.state.password.length > 1) {
        const {first_name,last_name,email,password,confirm_password} = this.state
        axios.post('/api/register',{first_name,last_name,email,password,confirm_password}).then(()=>this.setState)
    }
}
render() {
    return(
        <div>
            <h5>First Name</h5>
            <input name='first_name' onChange={this.handleChange} value={this.state.first_name}/>
            <h5>Last Name</h5>
            <input name='last_name' onChange={this.handleChange} value={this.state.last_name}/>
            <h5>Email</h5>
            <input name='email' onChange={this.handleChange} value={this.state.email}/>
            <h5>Password</h5>
            <input name='password' onChange={this.handleChange} value={this.state.password}/>
            <h5>Confirm Password</h5>
            <input name='confirm_password' onChange={this.handleChange} value={this.state.confirm_password}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.handleCancel}>Cancel</button>
        </div>
    )
}
}