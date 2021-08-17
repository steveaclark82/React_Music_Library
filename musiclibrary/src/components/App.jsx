import React, { Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import axios from 'axios';
import CreateSong from './CreateSong/createSong';
import SearchBar from './SearchBar/searchBar';
import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            songs: [],
            currentSongs: []
        }
    }
    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
            currentSongs : response.data
        });
    }

    filterSongs=(songsToDisplay)=>{
        this.setState({
            currentSongs : songsToDisplay
        })
    }

    deleteSong = async (id) => {
        console.log(this.props)
        await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    addSong = async (song) => {
        await axios.post('http://127.0.0.1:8000/music/',song)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    likeSong = async (id, title) => {
        console.log(this.props)
        await axios.patch(`http://127.0.0.1:8000/music/${id}/${title}/`)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    render() {
        return (
            <div>
                <div className='background'>
                    <center>
                    <br/>
                    <SearchBar songs={this.state.songs} filterSongs={this.filterSongs}/>
                    <br/>
                    <MusicTable songs={this.state.currentSongs} deleteSongs={this.deleteSong} likeSong={this.likeSong}/>
                    
                    <CreateSong addSong={this.addSong.bind(this)}/>
                    <br/>
                    </center>
                </div>
            </div>
        );
    }
}

export default App;