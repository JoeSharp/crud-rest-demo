import React, { useMemo, useEffect } from "react";
import { setAppElement } from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

import useServerApi from "../useServerApi";
import { Author } from "../useServerApi/useServerApi";
import NewAuthorDialog, {
  useDialog as useEditAuthorDialog
} from "../EditAuthorDialog";

interface AuthorWithHandlers {
  author: Author;
  handleUpdate: () => void;
  handleDelete: () => void;
}

const App: React.FC = () => {
  useEffect(() => setAppElement("body"), []);

  const { authors, createAuthor, updateAuthor, deleteAuthor } = useServerApi();
  const {
    openDialog: openNewAuthorDialog,
    componentProps: newAuthorDialogProps
  } = useEditAuthorDialog({
    onCreate: createAuthor,
    subtitle: "Add New Author"
  });

  const {
    setExisting: setAuthorToUpdate,
    openDialog: openUpdateAuthorDialog,
    componentProps: updateAuthorDialogProps
  } = useEditAuthorDialog({
    onCreate: updateAuthor,
    subtitle: "Update Author"
  });

  const authorAndHandlers: AuthorWithHandlers[] = useMemo(
    () =>
      authors.map(author => ({
        author,
        handleUpdate: () => {
          setAuthorToUpdate(author);
          openUpdateAuthorDialog();
        },
        handleDelete: () => deleteAuthor(author.id)
      })),
    [openUpdateAuthorDialog, setAuthorToUpdate, deleteAuthor, authors]
  );

  return (
    <div className="container">
      <h1>CRUD Example Application - Authors</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authorAndHandlers.map(
            ({
              handleDelete,
              handleUpdate,
              author: { id, firstName, lastName }
            }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={handleUpdate}
                      className="btn btn-light btn-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={handleDelete}
                      className="btn btn-light btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button onClick={openNewAuthorDialog} className="btn btn-primary">
        Add New Author
      </button>
      <NewAuthorDialog {...updateAuthorDialogProps} />
      <NewAuthorDialog {...newAuthorDialogProps} />
    </div>
  );
};

export default App;
