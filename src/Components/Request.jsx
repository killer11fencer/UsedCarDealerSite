import React, {Component} from 'react'
import axios from 'axios'

class Request extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        price_range: [],
        make: '',
        model:'',
        miles: []
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        if()
    }
render () {
    return (
        <div>
            <h5> Name: </h5>
            <input/>
        </div>
    )
}
}

export default Request