import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

// import { robots } from './robots';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => { return response.json(); })
            .then(users => { this.setState({ robots: users }); });

    }

    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value });

    }

    render() {
        const { searchfield, robots } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // if robots.length === 0, then Loading will be display.

        // if (!robots.length) {
        //     return <h1>Loading</h1>
        // }
        // else {
        //     return (
        //         <div className='AppClass' >
        //             <h1>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //             <Scroll>
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     );
        // }

        // Can do this too:

        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='AppClass' >
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    };
}

export default App;