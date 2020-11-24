import './App.css';
import FilteredList from './FilteredList.jsx';

function App() {

  const albumList = [
    { name: "Sleepy Sundays", genre: "lullaby", numSongs: 12, likes: 140, key: 0, mood: "sleepy", image: "https://www.squishable.com/mm5/graphics/00000001/opensquish_sheep_71867_design.jpg" },
    { name: "Moody Mondays", genre: "lullaby", numSongs: 10, likes: 121, key: 1, mood: "energetic", image: "https://images-na.ssl-images-amazon.com/images/I/51K9ytVC7vL.jpg" },
    { name: "Naptime Classics", genre: "lullaby", numSongs: 15, likes: 285, key: 2, mood: "sleepy", image: "https://store-images.s-microsoft.com/image/apps.34665.9007199266341732.e4fd439d-c293-4d89-a05f-da5f2fcc351d.015366ca-6732-499f-b0c6-10f78edb6c0d?mode=scale&q=90&h=300&w=300" },
    { name: "Princess Poetry", genre: "film", numSongs: 11, likes: 223, key: 3, mood: "energetic", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/six-original-disney-princesses-1594061746.jpg?crop=0.962xw:0.980xh;0.00641xw,0&resize=1200:*" },
    { name: "Under the Sea", genre: "film", numSongs: 10, likes: 387, key: 4, mood: "energetic", image: "https://i.pinimg.com/originals/72/7f/b4/727fb4f0544bb80886eeabff1fbb1ef7.jpg" },
    { name: "Frozen", genre: "film", numSongs: 13, likes: 390, key: 5, mood: "sing-along", image: "https://images-na.ssl-images-amazon.com/images/I/81usSON0ZoL._SL1500_.jpg" },
    { name: "Dr Seuss Classics", genre: "film", numSongs: 14, likes: 146, mood: "energetic", key: 6, image: "https://www.booktrust.org.uk/globalassets/images/news-and-blogs/blogs-2019/07.-july/wtra-dr-seuss/cat-in-the-hat-16x9.jpg?w=1200&h=675&quality=70&anchor=middlecenter" },
    { name: "The Lion King", genre: "film", numSongs: 15, likes: 385, key: 7, mood: "sing-along", image: "https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_18276_ada305ce.jpeg?region=0,0,2048,879" },
    { name: "Time for Bed", genre: "lullaby", numSongs: 16, likes: 85, key: 8, mood: "sleepy", image: "https://www.songsforteaching.com/images/categorypics/lullaby2.jpg" },
    { name: "Sweet Dreams", genre: "lullaby", numSongs: 12, likes: 178, key: 9, mood: "sleepy", image: "https://www.avera.org/app/files/public/goodnight-moon-illustration.jpg" },
    { name: "Nursery Rhymes", genre: "lullaby", numSongs: 13, likes: 62, key: 10, mood: "sing-along", image: "https://images.penguinrandomhouse.com/cover/9781680104660" },
    { name: "Disney Favorites", genre: "film", numSongs: 20, likes: 405, key: 11, mood: "sing-along", image: "https://i.insider.com/5f577f8be6ff30001d4e76a8?width=750&format=jpeg&auto=webp" }

  ]
  return (
    <div className="App">
      <div className="title"> <h1 style={{fontWeight: "bold", padding: "1%"}}>BABY BOPS</h1><h3>Add your favorite albums to your playlist!</h3></div>

      <FilteredList albums={albumList} />

    </div>
  );
}

export default App;
