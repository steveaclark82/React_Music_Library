import React, { Component } from 'react'
import axios from 'axios';

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      album: '',
      artist: '',
      release_date: '',
    }
  }

  TitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  AlbumChange = e => {
    this.setState({
      album: e.target.value
    });
  };

  ArtistChange = e => {
    this.setState({
      artist: e.target.value
    });
  };

  ReleaseDateChange = e => {
    this.setState({
      release_date: e.target.value
    });
  };

  Submit = e => {
    const data = {
      title: this.state.title,
      album: this.state.album,
      artist: this.state.artist,
      release_date: this.state.release_date
    };
    axios
    .post("http://127.0.0.1:8000/music/", data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

  render() { 
    return ( 
      <div className="post">
        <form className="post" onSubmit={this.Submit}>


          <input
            placeholder="Title" value={this.state.title}
            onChange={this.TitleChange} required
          />

          <input
            placeholder="Album" value={this.state.album}
            onChange={this.AlbumChange} required
          />

          <input
            placeholder="Artist" value={this.state.artist}
            onChange={this.ArtistChange} required
          />

          <input
            placeholder="Release Date" value={this.state.release_date}
            onChange={this.ReleaseDateChange} required
          />
          


          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}
 
export default SongForm;
