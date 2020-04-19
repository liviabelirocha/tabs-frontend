import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaGuitar } from "react-icons/fa";

import { Wrapper, Container, Content, Song } from "./styles";

import api from "../../services/api";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AllTabs() {
  const [songs, setSongs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("songs").then((res) => {
      setSongs(res.data);
    });
  }, []);

  function handleClick(instrument, author, name, id) {
    history.push(`tabs/${instrument}/${author}/${name}/${id}`);
  }

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <center>TABS</center>
        <Content>
          {songs.map((song) => (
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

export default AllTabs;
