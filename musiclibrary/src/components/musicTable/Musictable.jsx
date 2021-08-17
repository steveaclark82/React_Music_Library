import React from 'react';
import './Musictable.css';
import Delete from '../DeleteSong/deleteSong';
import Like from '../LikeButton/likeButton';


function MusicTable(props){
    console.log(props);
    if(props.songs === undefined){
        return (
            <div>hello</div>
        );
    }
    else{
        return(
            <div className='table'>
                <h1>Music Library</h1>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tbody>
                    {props.songs.map(function(song){
                        return (
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td>{song.likes}</td>
                            <td><Like songId={song.id} songtitle={song.title} likeSong={props.likeSong}/></td>
                            <td><Delete songId={song.id} deleteSongs={props.deleteSongs} /></td>
                        </tr>
                        )
                    }
                    )
                    }
                    </tbody>
                </table>
                
            </div>
        )
    }
}
   
export default MusicTable;