import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: '',
            likes: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        }, function(){
            let songs = this.props.songs.filter(song => song.title.includes(this.state.filter) || song.genre.includes(this.state.filter) || 
            song.album.includes(this.state.filter)  || song.artist.includes(this.state.filter) || song.release_date.includes(this.state.filter))
            this.props.filterSongs(songs)
        });
    }

    render() {
            return(
                <div className='search'>
                    <label>Search:  </label>
                    <input type='text' value={this.state.filter} onChange={this.Change}/>
                </div>
            );
    }
}


export default SearchBar;