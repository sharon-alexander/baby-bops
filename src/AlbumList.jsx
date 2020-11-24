import React from 'react';
import Album from './Album.jsx';

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="albums">
                    {this.props.albums.map((album) =>
                        <div className="singleAlbum">
                            <Album addToPlaylist={this.props.addToPlaylist} key={album.key} name={album.name} numSongs={album.numSongs} image={album.image} likes={album.likes} genre={album.genre} mood={album.mood} />
                        </div>)}
                </div>
            </>


        )


    }

}