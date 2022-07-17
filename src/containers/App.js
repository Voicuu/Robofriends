import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import './App.css'
import Scroll from "../components/Scroll"


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (!this.state.robots.length)
            return <h1>LOADING</h1>
        else {
            return [
                <div className="tc" >
                    <h1 className="f1">RoboFriennds</h1>
                    <div className="main">
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={filterRobots} />
                        </Scroll>
                    </div>
                </div>
            ];
        }

    }

}

export default App;