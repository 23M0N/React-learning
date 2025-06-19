import React, { useState } from "react";

export default function UsersList() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState(false);

  // Use a function that triggers fetching only once when you click a button
  async function fetchUsersInfo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setData(users);
    setVal(true);
  }

  if (!val) {
    return (
      <div>
        <p>Click the button to load users:</p>
        <button onClick={fetchUsersInfo}>Load Users</button>
      </div>
    );
  }

  return (
    <ul>
      {data.map((user) => (<li key={user.id}>{user.username}</li>))}
    </ul>
  );
}
