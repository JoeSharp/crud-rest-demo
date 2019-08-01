import { useState, useEffect } from "react";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export interface AuthorsApi {
  serverName: string;
  authors: Author[];
}

const serverAddress = "http://localhost:8080";

const getServerNameUrl = `${serverAddress}/serverName`;
const getAuthorsUrl = `${serverAddress}/`;

const useServerApi = (): AuthorsApi => {
  const [serverName, setServerName] = useState<string>("default");
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetch(getAuthorsUrl)
      .then(r => r.json())
      .then(setAuthors);
    fetch(getServerNameUrl)
      .then(r => r.text())
      .then(setServerName);
  }, []);

  return {
    serverName,
    authors
  };
};

export default useServerApi;
