import React, {Component} from 'react'
import axios from 'axios'

class Inventory extends Component {
    constructor () {
        super();
        this.state = {
            inventory: []
        }
    
    }
    componentDidMount () {
        this.getInventory()
    }
    getInventory = () => {
        axios.get('/api/inventoryy').then(res=> this.setState({inventory:res.data}))
        .catch(err => console.log('err on inventory',err))
    }
}