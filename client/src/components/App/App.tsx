import React from "react";
import useFriendsApi from "../friendsApi";

const App: React.FC = () => {
  const { serverName } = useFriendsApi();

  return (
    <div>
      Application Goes Here
      <p>Server Name Is: {serverName}</p>
    </div>
  );
};

export default App;
