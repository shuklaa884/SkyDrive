import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Fade } from "react-bootstrap";
import React, { useState } from "react";
import { deleteFile } from "./DeleteFile";

export default function File({ file }) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteFile(file);
  };

  return (
    <>
      <Button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant="outline-info"
        className=" text-truncate w-100"
      >
        <FontAwesomeIcon icon={faFile} /> {file.name}
      </Button>
      <Fade
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        in={open}
        className="w-100"
      >
        <div id="example-fade-text">
          <a
            href={file.url}
            rel="noopener noreferrer"
            target="_blank"
            className=" btn"
            download
          >
            Open
          </a>
          <label
            className=" btn"
            onClick={handleDelete}
            style={{ padding: "2px" }}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </label>
        </div>
      </Fade>
    </>
  );
}
