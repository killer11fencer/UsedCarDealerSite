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
    let displaySold = this.state.recentlySold.map((car,id)=>{
        return <div key={id}>
        <h4>{car.make}</h4>
        <h4>{car.model}</h4>
        <h4>{car.status}</h4>
        <h4>{car.price}</h4>
        </div>
    })
    let displayNew = this.state.recentlySold.map((car,id)=>{
        return <div key={id}>
        <h4>{car.make}</h4>
        <h4>{car.model}</h4>
        <h4>{car.status}</h4>
        <h4>{car.price}</h4>
        </div>
    })
    return (
        <div>
            <h1>Vash Auto</h1>
            <h5>Introduction</h5>
            <h5>New Inventory</h5>
            {displayNew}
            <h5>Recently Sold</h5>
            {displaySold}
            <h5>View Our Inventory</h5>
        </div>
    )
}
}

export default Home