import React, {Component} from 'react'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            referrals: []

        }

    }
    render() {
        let displayReferral = this.state.referrals.map((ref,id) => {
            return <div>{ref.title}</div>
        })
        return (
            <div>
                <h1>Referrals</h1>
                <input></input>
            </div>
        )
    }
}

export default Contact