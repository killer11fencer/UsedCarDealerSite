import React, {Component} from 'react'
import axios from 'axios'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            recentlySold: [],
            newInventory: []
        }
    }
    componentDidMount () {
        this.getRecentlySold()
    }
getRecentlySold = () => {
    axios.get('/api/recentlysold').then(res=>this.setState({recentlySold: res.data}))
    .catch(err=> console.log('error on recent inventory',err))
}
getNewInventory = () => {
    axios.get('/api/newinventory').then(res=>this.setState({newInventory: res.data}))
    .catch(err=> console.log('error on new inventory',err))
}
render() {
    
    return (
        <div>
            <h1>Vash Auto</h1>
            <h5>Introduction</h5>
            <h5>New Inventory</h5>
            <h5>Recently Sold</h5>
            <h5>View Our Inventory</h5>
        </div>
    )
}
}

export default Home