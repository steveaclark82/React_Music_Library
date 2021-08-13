import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.getAllMusic = this.getAllMusic.bind(this);
        
        this.state = { 
            allMusic: [],
            search: ''          
        }
    }

    render() {
        return(
            <h1></h1>
        )
    }
}

export default App;
