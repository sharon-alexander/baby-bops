import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumList from './AlbumList.jsx';
import Album from './Album.jsx';

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


    addToPlaylist = event => {

        // get outer most parent div of the event 

        console.log(event);

        var item = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.children;
        console.log(item)

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

                <div className="mainContainer">

                    <div className="title"><h3> Albums for you</h3>
                        <AlbumList addToPlaylist={this.addToPlaylist} albums={this.sortList(this.filterList(this.props.albums))} />
                    </div>

                    <div className="title"><h3>Playlist</h3>
                    </div>


                    {this.state.playlist.map((album) =>
                        <div className="singleAlbum">
                            <Album addToPlaylist={this.props.addToPlaylist} key={album.key} name={album.name} numSongs={album.numSongs} image={album.image} likes={album.likes} genre={album.genre} mood={album.mood} />
                        </div>
                    )}

                </div>

            </>


        )
    }

}