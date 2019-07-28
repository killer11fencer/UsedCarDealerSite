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
            <h5>Email</h5>
            <h5>Password</h5>
            <h5>Confirm Password</h5>
            <button>Submit</button>
            <button>Cancel</button>
        </div>
    )
}
}