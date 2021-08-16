import React from 'react';
import './Musictable.css';
import { Button } from 'react';


const Musictable = (props) => {
    return (
        <table className="table table-dark table-hover" cellSpacing="0" width="100%">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Song Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Release Date</th>
                </tr>
            </thead>
            <tbody>
            {props.songs.map(song =>  
            <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td><Button color='yellow' onClick={() => {props.update(song.id)}}>Update</Button>
                <Button negative onClick={() => {props.delete(song.id)}}>Delete</Button></td>
            </tr>
            )}
            </tbody>
        </table>        
    )
}

export default Musictable;