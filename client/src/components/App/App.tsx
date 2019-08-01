import React from "react";
import useServerApi from "../useServerApi";

const App: React.FC = () => {
  const { serverName, authors } = useServerApi();

  return (
    <div>
      Application Goes Here
      <p>Server Name Is: {serverName}</p>
      <h2>Authors</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>{JSON.stringify(author)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
