import React from 'react';
import './Musictable.css';



const Musictable = (props) => {
    return (
        <Table inverted>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Song Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
        {props.songs.map((song, info) => { 
        return (
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
    )}
            </tbody>
        </Table>
        
    )
}

export default MusicTable;