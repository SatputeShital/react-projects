import React, { Component} from 'react';
import axios from 'axios';

class APIIntegrationInClassComp extends Component {

    constructor(props) {   
        super(props);

        this.state = { 
            user: []
        };

    }

    fetchUserDetails = async() => {
      const userData = await axios.get('https://fakestoreapi.com/users')
        console.log(userData.data);
        this.setState({user:userData.data});
    }

    render() {
        return (
            <>
                <h1>API Integration in Class Component</h1>
            <ul>
                { this.state.user.map((user) => (
                   <li> {user.username} - {user.email} </li>
                ))}

            </ul>

            </>
        );
    }

    componentDidMount() {
        console.log('componentDidMount called');
        this.fetchUserDetails();
    }
}

export default APIIntegrationInClassComp;