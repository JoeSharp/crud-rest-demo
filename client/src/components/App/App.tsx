import React, { useMemo, useEffect } from "react";
import useServerApi from "../useServerApi";
import { Author } from "../useServerApi/useServerApi";
import NewAuthorDialog, {
  useDialog as useEditAuthorDialog
} from "../EditAuthorDialog";
import { setAppElement } from "react-modal";

interface AuthorWithHandlers {
  author: Author;
  handleUpdate: () => void;
  handleDelete: () => void;
}

const App: React.FC = () => {
  useEffect(() => setAppElement("body"), []);

  const {
    serverName,
    authors,
    createAuthor,
    updateAuthor,
    deleteAuthor
  } = useServerApi();
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
    <div>
      Application Goes Here
      <p>Server Name Is: {serverName}</p>
      <h2>Authors</h2>
      <table>
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
                  <button onClick={handleUpdate}>Update</button>
                  <button onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button onClick={openNewAuthorDialog}>Add New Author</button>
      <NewAuthorDialog {...updateAuthorDialogProps} />
      <NewAuthorDialog {...newAuthorDialogProps} />
    </div>
  );
};

export default App;
