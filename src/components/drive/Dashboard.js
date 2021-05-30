import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import AddFolderBtn from "./AddFolderBtn";
import Navbar from "./Navbar";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId,state.folder);
  console.log(childFolders);
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderBtn currentFolder={folder} />
        </div>

        {childFolders && childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
