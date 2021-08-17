import React, { Component } from 'react';
import './createSong.css';
import React, {Component} from 'react';


class CreateSong extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    render(){
        return(
            <div>
                <hr />
                <h2>Add a Song</h2>
                <form onSubmit= {this.handleSubmit}>
                    <div className='row col-align'>
                        <div className='col-md-4'>
                            <label>Title:</label>
                            <input type='text' name='title' value = {this.state.title} onChange={this.handleChange}/>
                        </div>
                        <div className= 'col-md-4'>
                            <label>Artist:</label>
                            <input type='text' name='artist' value = {this.state.artist} onChange={this.handleChange}/>
                        </div>
                        <div className= 'col-md-4'>
                            <label>Album:</label>
                            <input type='text' name='album' value = {this.state.album} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-4'>
                            <label>Release Date:</label>
                            <input type='date' name='release_date' value = {this.state.release_date} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-4'>
                            <label>Likes:</label>
                            <input type='text' name='like' value = {this.state.like} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <div>
                                <input type='submit' value='Click here to add your song!'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateSong