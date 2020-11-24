import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumList from './AlbumList.jsx';
import { Card, CardHeader, CardContent, CardMedia, Typography, CardActions, Button } from "@material-ui/core";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class FilteredList extends React.Component {

    constructor(props) {
        super(props);

        this.addToPlaylist = this.addToPlaylist.bind(this);

        this.state = {
            genre: "All",
            mood: "All",
            sorted: "All",
            playlist: [],
            aggregator: 0

        }
    }

    //sets the state depending on which genre was clicked on 
    onSelectFilterGenre = event => {

        this.setState({
            genre: event
        })

    };

    // returns true if item's genre is the same as the state or if user clicks "All"
    matchesFilterGenre = item => {

        if (this.state.genre === "All") {
            return true
        } else if (this.state.genre === item.genre) {
            return true
        } else {
            return false
        }

    }

    onSelectFilterMood = event => {

        this.setState({
            mood: event
        })
    };

    matchesFilterMood = item => {

        if (this.state.mood === "All") {
            return true
        } else if (this.state.mood === item.mood) {
            return true
        } else {
            return false
        }

    }

    // takes in a list and filters according to which items match the genre picked 
    filterList = list => {
        return this.props.albums.filter((album => this.matchesFilterGenre(album))).filter((album => this.matchesFilterMood(album)));
    }


    // sets sorted to state to whatever user clicked on 
    onSelectSortLikes = event => {

        this.setState({
            sorted: event
        })
    }


    sortList = list => {
        if (this.state.sorted === "most to least") {
            return list.sort((a, b) => {
                return b.likes - a.likes; //might be inverted 
            })
        } else if (this.state.sorted === "least to most") {
            return list.sort((a, b) => {
                return a.likes - b.likes;
            })
        } else {
            return list;
        }
    }


    addToPlaylist = item => {

        console.log(item)

        if (this.state.playlist.includes(item)) {
            alert("Already in playlist!")
            return
        }

        this.setState({
            playlist: [...this.state.playlist, item], /* add item to array */
            aggregator: this.state.aggregator + item.numSongs /* increment aggregator */
        })
    }

    removeFromPlaylist = item => {

        const items = this.state.playlist.filter(album => album !== item) /* remove from array */

        this.setState({
            playlist: items,
            aggregator: this.state.aggregator - item.numSongs
        })
    }


    render() {


        return (
            <>

                <div className="filters-sorting">

                    <Navbar className="color-nav" variant="dark">
                        <Navbar.Brand href="#genre">Genre</Navbar.Brand>
                        <Navbar.Collapse id="filtering-navbar">
                            <Nav className="mr-auto">
                                <Nav.Link eventKey="All" onSelect={this.onSelectFilterGenre} href="#all">All</Nav.Link>
                                <Nav.Link eventKey="lullaby" onSelect={this.onSelectFilterGenre} href="#lullaby">Lullabies</Nav.Link>
                                <Nav.Link eventKey="film" onSelect={this.onSelectFilterGenre} href="#film">Movie Soundtracks</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />

                    <Navbar className="color-nav" variant="dark">
                        <Navbar.Brand href="#mood">Mood</Navbar.Brand>
                        <Navbar.Collapse id="filtering-navbar">
                            <Nav className="mr-auto">
                                <Nav.Link eventKey="All" onSelect={this.onSelectFilterMood} href="#all">All</Nav.Link>
                                <Nav.Link eventKey="energetic" onSelect={this.onSelectFilterMood} href="#energetic">Energetic</Nav.Link>
                                <Nav.Link eventKey="sleepy" onSelect={this.onSelectFilterMood} href="#sleepy">Sleepy</Nav.Link>
                                <Nav.Link eventKey="sing-along" onSelect={this.onSelectFilterMood} href="#sing-along">Sing-along</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                    <Navbar className="color-nav" variant="dark">
                        <Navbar.Brand href="#sort-by-likes">Sort by likes </Navbar.Brand>
                        <Navbar.Collapse id="filtering-navbar">
                            <Nav className="mr-auto">
                                <NavDropdown title="Select" id="collasible-nav-dropdown">
                                    <NavDropdown.Item eventKey="all" onSelect={this.onSelectSortLikes} href="#all">All </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="most to least" onSelect={this.onSelectSortLikes} href="#most-to-least">Most to least </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="least to most" onSelect={this.onSelectSortLikes} href="#least-to-most">Least to most</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>

                <div className="layout-container">
                    <div className="title"><h3> Albums for you</h3></div>
                    <div className="title"><h3>Playlist</h3> <h5>Total songs: {this.state.aggregator}</h5></div>
                </div>

                <div className="layout-container">

                    <AlbumList addToPlaylist={this.addToPlaylist} albums={this.sortList(this.filterList(this.props.albums))} />

                    <div className="albums">
                        {this.state.playlist.map((album) =>

                            <Card style={{ backgroundColor: '#808DFE', margin: '2%' }}> <CardHeader className="album-title" style={{ color: 'white' }} title={album.name} />
                                <CardContent>
                                    <CardMedia style={{ height: 0, paddingTop: '60%' }} image={album.image} />
                                    <Typography component="p" style={{ textAlign: "left", color: 'white', fontSize: '14px', fontFamily: 'Helvetica Neue', padding: '1%' }}>
                                        <FavoriteIcon />{album.likes}
                                        <LibraryMusicIcon style={{ paddingLeft: '5%' }} />{album.numSongs} songs
                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => this.removeFromPlaylist(album)} style={{ color: "white", fontWeight: "bold" }} > Remove from playlist </Button>
                                </CardActions>
                            </Card>
                        )}
                    </div>
                </div>

            </>


        )
    }

}