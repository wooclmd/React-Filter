import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  //Fetch data from api
  useEffect(() => {
    const userData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${input}`);
      setData(res.data);
    };
    userData();
  }, [input]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

//METHOD 1(Doesn't require useEffect fetching data from back-end)
{
  /* <ul className="list">
{Users.filter((user) =>
  user.first_name.toLowerCase().includes(input)
).map((user) => (
  <li key={user.id} className="listItem">
    {user.first_name}
  </li>
))}
</ul> */
}

//METHOD 2
//USE indexOf

export default App;
