import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

function Search() {
  const [search, setSearch] = useState("");

  const history = useHistory();

  function handleSearch(e) {
    e.preventDefault();

    const query = { search: search };

    api
      .get("search", {
        params: query,
      })
      .then((res) => {
        const url = search.replace(" ", "+");
        history.push(`/search?search=${url}`, { songs: res.data });
      });
  }

  return (
    <Container onSubmit={handleSearch}>
      <input
        placeholder="Search song"
        name={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </Container>
  );
}

export default Search;
