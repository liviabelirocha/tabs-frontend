import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo } from "./styles";

function SubmitFile(file) {
  file = file.file[0];
  return (
    <Container>
      <li>
        <FileInfo>
          <div>
            <strong>{file.fileName}</strong>
            <span>{file.readableSize}</span>
          </div>
        </FileInfo>
        <div>
          {!file.uploaded && !file.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: "#7159c1" },
              }}
              strokeWidth={10}
              value={file.progress}
            />
          )}
          {file.url && (
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}
          {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {file.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    </Container>
  );
}

export default SubmitFile;
