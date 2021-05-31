import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function File({ file }) {
  return (
    <a
      href={file.url}
      rel="noreferrer"
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFile} />
      {file.name}
    </a>
  );
}
