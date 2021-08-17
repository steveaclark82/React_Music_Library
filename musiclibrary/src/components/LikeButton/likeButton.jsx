import React, { Component } from 'react';

function Like (props) {
    return (
        <div>
            <button onClick={() => props.likeSong(props.songId, props.songTitle)}>Like</button>
        </div>
    );
}

export default Like;