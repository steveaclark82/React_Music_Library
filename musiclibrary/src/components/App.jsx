import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
//import Music from './Music/Music';
import MusicTable from './Music/MusicTable';
import SongCreator from './SongCreator/SongCreator';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(){
        super();
        this.getAllMusic = this.getAllMusic.bind(this);
    }
    state = {
        allMusic: [],
        search : ''
  }

  componentDidMount(){
    console.log("component did mount");
    this.getAllMusic();
   
  }


  async getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      allMusic: response.data
    })
  }

   async addNewSong(song){
    await axios.post('http://127.0.0.1:8000/music/', song)
    this.getAllMusic();
  }

  mapMusic(){
    console.log("music state", this.state);
    return this.state.allMusic.map(music =>
      <Music 
        key={music.id}
        music={music}
        deleteMusic = {(songId) => this.deleteMusic(songId)}
      />
    )
  }

handleInput = (event) => {
this.setState({ search: event.target.value});
const filteredMusic = this.state.allMusic.filter(element => {
if(event.target.value === ""){
  this.getAllMusic();
  element = this.state.allMusic
  return element
}
return element.title.includes(this.state.search) || element.artist.includes(this.state.search) || element.album.includes(this.state.search) || element.release_date.includes(this.state.search) 
});
this.setState({
  allMusic : filteredMusic
})

  }


  async deleteMusic(songId){
      console.log("DELETE", songId);
      await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
      this.getAllMusic();
  }

  render(){
    console.log("this.state", this.state);
    return(
    <div>
        <SearchBar handleInput= {this.handleInput} />
        <MusicTable mapMusic= {() => this.mapMusic()}/>
        <SongCreator addNewSong= {this.addNewSong.bind(this)}/>
    </div>
    );
  }
}

export default App;