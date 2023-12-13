import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([{}]);

  // Get data from backend nodejs
  useEffect(() => {
      console.log("Fetching");
      fetch("/api").then((response) =>
        response.json().then((data) => {
          console.log("response", response);
          setUserData(data);
        })
      );
  }, []);


  return (
    <div>
      {typeof userData.users === "undefined" ? (
        <p>Loading ...</p>
      ) : (
        userData.users.map((item, i) => <p key={i}>{item}</p>)
      )}
    </div>
  );
}
export default App;
