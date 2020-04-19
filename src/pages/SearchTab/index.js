import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";
import queryString from "query-string";

import { Wrapper, Container, Content, Song } from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function SearchTab() {
  const [noSong, setNoSong] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const songs = location.state.songs;
  const query = queryString.parse(location.search);

  function handleClick(instrument, author, name, id) {
    history.push(`tabs/${instrument}/${author}/${name}/${id}`);
  }

  useEffect(() => {
    if (songs.length === 0) setNoSong(true);
    else setNoSong(false);
  }, [songs.length]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <center>SEARCH RESULTS</center>
        {noSong && <div>No songs were found for '{query.search}'.</div>}
        <Content>
          {songs &&
            songs.map((song) => (
              <Song
                key={song._id}
                onClick={() =>
                  handleClick(song.instrument, song.author, song.name, song._id)
                }
              >
                <FaGuitar size={24} />
                <div>
                  <h3>{song.name}</h3>
                  {song.author} - {song.instrument}
                </div>
              </Song>
            ))}
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default SearchTab;
