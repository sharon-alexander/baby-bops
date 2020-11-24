import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, CardActions, Button } from "@material-ui/core";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Album extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {

        // let name = this.props.name;
        // console.log(name)



        return (
            <div>
                <Card style={{ backgroundColor: '#808DFE' }}> <CardHeader className="album-title" style={{ color: 'white' }} title={this.props.name} />
                    <CardContent>
                        <CardMedia style={{ height: 0, paddingTop: '60%' }} image={this.props.image} />
                        <Typography component="p" style={{ textAlign: "left", color: 'white', fontSize: '14px', fontFamily: 'Helvetica Neue', padding: '1%' }}>
                            <FavoriteIcon />{this.props.likes}
                            <LibraryMusicIcon style={{ paddingLeft: '5%' }} />{this.props.numSongs} songs
                            </Typography>
                    </CardContent>
                    <CardActions>
                        {/* how do I make addToPlaylist add this current album */}
                        {/* target={this.props.name}  */}
                        <Button onClick={this.props.addToPlaylist} target={this.props.name} style={{ color: "white", fontWeight: "bold" }} > Add to playlist </Button>
                    </CardActions>
                </Card>

            </div>
        )
    }

}