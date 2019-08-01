import { useState, useReducer, useEffect, useCallback } from "react";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export interface AuthorsApi {
  serverName: string;
  authors: Author[];
  createAuthor: (author: Author) => void;
  updateAuthor: (author: Author) => void;
  deleteAuthor: (id: number) => void;
}

const serverAddress = "http://localhost:8080";

const baseAuthorUrl = `${serverAddress}/`;
const getServerNameUrl = `${serverAddress}/serverName`;
const getAllAuthorsUrl = `${serverAddress}/all`;

interface SetAuthors {
  type: "SET";
  authors: Author[];
}

interface AddAuthor {
  type: "ADD";
  author: Author;
}

interface UpdateAuthor {
  type: "UPDATE";
  author: Author;
}

type ReducerAction = SetAuthors | AddAuthor | UpdateAuthor;

const reducer = (state: Author[], action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.author];
    case "SET":
      return action.authors;
    case "UPDATE":
      return state.map(author => {
        if (author.id === action.author.id) {
          return action.author;
        } else {
          return author;
        }
      });
  }

  return state;
};

const useServerApi = (): AuthorsApi => {
  const [serverName, setServerName] = useState<string>("default");
  const [authors, dispatch] = useReducer(reducer, []);

  const getServerName = useCallback(
    () =>
      fetch(getServerNameUrl)
        .then(r => r.text())
        .then(setServerName),
    [setServerName]
  );
  const getAllAuthors = useCallback(
    () =>
      fetch(getAllAuthorsUrl)
        .then(r => r.json())
        .then(authors => dispatch({ type: "SET", authors })),
    []
  );

  useEffect(() => {
    getAllAuthors();
    getServerName();
  }, [getServerName, getAllAuthors]);

  const createAuthor = useCallback(
    (author: Author) =>
      fetch(baseAuthorUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(author)
      })
        .then(r => r.json())
        .then((author: Author) => dispatch({ type: "ADD", author })),
    []
  );

  const updateAuthor = useCallback(
    (author: Author) =>
      fetch(baseAuthorUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(author)
      })
        .then(r => r.json())
        .then((author: Author) => dispatch({ type: "UPDATE", author })),
    []
  );

  const deleteAuthor = useCallback(
    (id: number) =>
      fetch(`${serverAddress}/${id}`, { method: "DELETE" }).then(getAllAuthors),
    [getAllAuthors]
  );

  return {
    serverName,
    authors,
    createAuthor,
    updateAuthor,
    deleteAuthor
  };
};

export default useServerApi;
