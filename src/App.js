import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=hf8BCWJfRr3et5BKOyfjvGTtNLESl9Ko&rating=g&limit=3`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  }, [URL]);

  const searchItems = (e) => {
    e.preventDefault();
    setQuery(e.target.childNodes[0].value);
  };

  console.log(gifs);

  return (
    <div className="App">
      <form action="submit" onSubmit={(e) => searchItems(e)}>
        <input
          type="text"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>search</button>
      </form>
      <p>{search}</p>

      {gifs.map((gif) => (
        <div>
          <p key={gif.id}>{gif.id}</p>
          <p>
            <img src={gif.images.downsized.url} alt="pictures" />
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
