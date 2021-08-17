import React from "react";


function Delete (props) {

        return (
            <div>
            <button onClick={() => props.deleteSongs(props.songId)}>Delete</button>
        </div>
        );
    }


export default Delete;