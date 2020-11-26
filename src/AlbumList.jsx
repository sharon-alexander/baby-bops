import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, CardActions, Button } from "@material-ui/core";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="albums">
                    {this.props.albums.map((album) =>
                        <Card style={{ backgroundColor: '#808DFE', margin: '2%' }}> <CardHeader className="album-title" style={{ color: 'white' }} title={album.name} />
                            <CardContent>
                                <CardMedia style={{ height: 0, paddingTop: '60%' }} image={album.image} />
                                <Typography component="p" style={{ textAlign: "left", color: 'white', fontSize: '14px', fontFamily: 'Helvetica Neue', padding: '1%' }}>
                                    <FavoriteIcon />{album.likes}
                                    <LibraryMusicIcon fontSize="large" style={{ paddingLeft: '5%' }} />{album.numSongs} songs
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => this.props.addToPlaylist(album)} style={{ color: "white", fontWeight: "bold" }} > Add to playlist </Button>
                            </CardActions>
                        </Card>
                    )}
                </div>
            </>


        )


    }

}