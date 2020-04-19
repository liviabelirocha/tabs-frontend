import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { uniqueId } from "lodash";
import filesize from "filesize";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import {
  SubmitContainer,
  SubmitContent,
  Form,
  DropContainer,
  UploadMessage,
  StyledLink,
} from "./styles.js";

import SubmitFile from "../../components/SubmitFile";

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [instrument, setInstrument] = useState("");
  const [youtubeURL, setURL] = useState("");
  const [file, setFile] = useState([]);

  const token = localStorage.getItem("token");

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive)
      return <UploadMessage>Drag the file over here</UploadMessage>;
    if (isDragReject)
      return <UploadMessage type="error">File not supported!</UploadMessage>;
    return <UploadMessage type="success">Put the file over here</UploadMessage>;
  }

  function handleUpload(newFile) {
    newFile = newFile[0];
    const uploadedFile = {
      name,
      author,
      instrument,
      youtubeURL,
      newFile,
      id: uniqueId(),
      fileName: newFile.name,
      readableSize: filesize(newFile.size),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    };

    setFile(file.concat(uploadedFile));
    processUpload(uploadedFile);
  }

  function processUpload(newFile) {
    const data = new FormData();
    const form = {
      name: newFile.name,
      author: newFile.author,
      instrument: newFile.instrument,
      youtubeURL: newFile.youtubeURL,
    };
    data.append("file", newFile.newFile, newFile.fileName);
    for (let i in form) data.append(i, form[i]);

    api
      .post(
        "songs",
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        {
          onUploadProgress: (e) => {
            const progress = parseInt(Math.round(e.loaded * 100) / e.total);
            newFile.progress = progress;
            const newF = [newFile];
            setFile(newF);
          },
        }
      )
      .then((res) => {
        Object.assign(newFile, {
          uploaded: true,
          id: res.data._id,
          url: res.data.url,
        });
        const then = [newFile];
        setFile(then);
      })
      .catch(() => {
        newFile.error = true;
        const err = [newFile];
        setFile(err);
      });
  }

  return (
    <SubmitContainer>
      <SubmitContent>
        <Form>
          <StyledLink to="/gear">
            <FiArrowLeft size={16} color="#3d2b57" />
            Go back to website
          </StyledLink>
          <h1>Submit New Song</h1>
          <input
            placeholder="Name"
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Author"
            name={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            placeholder="Instrument"
            name={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
          <input
            placeholder="Youtube URL"
            name={youtubeURL}
            onChange={(e) => setURL(e.target.value)}
          />
          {name && author && instrument && youtubeURL && (
            <Dropzone accept="application/pdf" onDropAccepted={handleUpload}>
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
              }) => (
                <DropContainer
                  {...getRootProps()}
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                  <input {...getInputProps()} />
                  {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
              )}
            </Dropzone>
          )}
          {!!file.length && <SubmitFile file={file} />}
        </Form>
      </SubmitContent>
    </SubmitContainer>
  );
}
