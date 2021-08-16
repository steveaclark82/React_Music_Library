import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
//import Music from './Music/Music';
import {Container} from 'react'
import musicTable from './musicTable/Musictable';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  state = {
    songs: []
}

componentMount(){
    this.allSongs();
}

async allSongs(){
    let response = await axios.get("http://127.0.0.1:8000/music/");
    this.setState({
        songs: response.data,
    })
}

delete = (id) => {
    axios.delete(`http://127.0.0.1:8000/info/${id}`)
    .then(() => this.setState({ status: 'Delete succesful' }))
    window.location.reload();
}

addSong(newSong){
    this.state.songs.push(newSong);
    axios.post('http://127.0.0.1:8000/music/', newSong)
    .then(response => this.setState({
      newSong: response.data
    }));
    window.location.reload();
  }


render() {
    return (
        
        <Container textAlign='justified'>
            <navbar />
            <SearchBar />
            <musicTable songs={this.state.songs} delete={this.delete} />
            <songForm addSong={this.addSong.bind(this)}/>
        </Container>
    );
}
}

export default App;