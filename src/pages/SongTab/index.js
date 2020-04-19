import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

import {
  Wrapper,
  Container,
  Content,
  YoutubePlayer,
  Info,
  InfoFile,
  InfoSong,
} from "./styles";

import api from "../../services/api";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AllTabs(props) {
  const [song, setSong] = useState({});

  const id = props.match.params.id;

  useEffect(() => {
    api.get(`songs/${id}`).then((res) => {
      setSong(res.data);
    });
  }, [id]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Content>
          <Info>
            <p>SONG</p>
            <InfoSong>{song.name}</InfoSong>
            <p>AUTHOR</p>
            <InfoSong>{song.author}</InfoSong>
            <p>INSTRUMENT</p>
            <InfoSong>{song.instrument}</InfoSong>
            <InfoFile href={song.url} target="_blank" rel="noopener noreferrer">
              <FaFilePdf />
              DOWNLOAD THE TAB
            </InfoFile>
          </Info>
          <div>
            <p>Check out the cover on Youtube!</p>
            <YoutubePlayer videoId={song.youtubeURL} />
          </div>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default AllTabs;
