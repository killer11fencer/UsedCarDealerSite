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
        axios.post('/api/register',)
    }
}

}