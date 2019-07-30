import { useState, useEffect } from "react";

interface FriendsApi {
  serverName: string;
}

const serverAddress = "http://localhost:8080";

const getServerNameUrl = `${serverAddress}/friends`;

const useFriendsApi = (): FriendsApi => {
  const [serverName, setServerName] = useState<string>("default");

  useEffect(() => {
    fetch(getServerNameUrl)
      .then(r => r.text())
      .then(s => setServerName(s));
  }, []);

  return {
    serverName
  };
};

export default useFriendsApi;
