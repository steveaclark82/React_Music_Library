import React, { Component } from 'react';
import './createSong.css';


class CreateSong extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            like: this.state.like
        }
        this.props.addNewSong(song);
        this.setState({
            title:'',
            artist: '',
            album:'',
            release_date:'',
            like: ''
        })
    }
    render() {
        return (
            <div className='form-box'>
                <form onSubmit={this.handleSubmit}>
                <h3>Add a Song</h3>
                <br/>
                    <div>
                        <label>Title:  </label>
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Artist:  </label>
                        <input type='text' name='artist' onChange={this.handleChange} value={this.state.artist}/>
                    </div>
                    <div>
                        <label>Album:  </label>
                        <input type='text' name='album' onChange={this.handleChange} value={this.state.album}/>
                    </div>
                    <div>
                        <label>Release Date:  </label>
                        <input type='text' name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                    </div>
                    <div>
                        <label>Likes:  </label>
                        <input type='text' name='likes' onChange={this.handleChange} value={this.state.likes}/>
                    </div>
                    <div>
                        <label>Genre:  </label>
                        <input type='text' name='genre' onChange={this.handleChange} value={this.state.genre}/>
                        <br/>
                    </div>
                    <div>
                        <br/>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateSong;