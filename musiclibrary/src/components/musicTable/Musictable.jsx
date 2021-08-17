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
        let musicList = props.songs.map(function(song){
            return <tr>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>{song.likes}</td>
                <td><Like songId={song.id} songTitle={song.title} likeSong={props.likeSong}/></td>
                <td><Delete songId={song.id} deleteSongs={props.deleteSongs} /></td>
            </tr>
        })
        return (
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
                    {musicList}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
   
export default MusicTable;